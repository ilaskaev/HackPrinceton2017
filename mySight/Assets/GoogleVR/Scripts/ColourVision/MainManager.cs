using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MainManager : MonoBehaviour {
    
    public PlateManager plateManager;
    public QuizManager quizManager;
    public GameObject instructionCanvas;
    public GameObject finalCanvas;

    private int correctCount;
    private int totalCount;
    private int numQuestions = 10;
    private string[] quizQuestions;
	// Use this for initialization
	void Start () {
        plateManager.SetActive(false);
        quizManager.SetActive(false);
        finalCanvas.SetActive(false);
        instructionCanvas.SetActive(true);
        correctCount = 0;
        totalCount = 0;
	}

    public void ContinuePressed()
    {
        instructionCanvas.SetActive(false);
        quizManager.SetActive(false);
        plateManager.nextPlate();
        plateManager.SetActive(true);
        StartCoroutine(ShowPictureFor(2));
    }

    private IEnumerator ShowPictureFor(int number)
    {
        yield return new WaitForSeconds(number);
        plateManager.SetActive(false);
        quizQuestions = quizManager.SetAnswers(plateManager.GetCurrentOptions());
        quizManager.SetActive(true);
    }

    public void SelectAnswer(int num)
    {
        if (quizQuestions[num] == plateManager.GetCurrentOptions()[0])
        {
            correctCount += 1;
        }
        totalCount += 1;
        if (totalCount >= numQuestions)
        {
            quizManager.SetActive(false);
            Finish();
        } else
        {
            ContinuePressed();
        }
    }

    public void Finish()
    {
        Text results = finalCanvas.transform.Find("Results").GetComponent<Text>();
        results.text = "Out of " + numQuestions + " questions, you got " + correctCount + " correct!";
        if (correctCount >= 9)
        {
            results.text += "\nYour color vision is just about spot on! ";
        } else if (correctCount >= 5)
        {
            results.text += "\nYou missed a few, but maybe you weren't ready for it. Give the test another shot and see how you do.";
        } else
        {
            results.text += "\nWe highly recommend you see an optometrist and have them test your color vision.";
        }
        results.text += "\nYour results have also been posted to your account. Check out WhatsWrongWithMyEyes.com";
        finalCanvas.SetActive(true);
    }
}
