using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Linq;

public class QuizManager : MonoBehaviour {

    public GameObject quizCanvas;
    public Text[] buttonTexts;

	// Use this for initialization
	void Start () {
        buttonTexts = new Text[4];
        var panel = quizCanvas.transform.Find("Panel").gameObject;
        for (int i = 1; i <= 4; i++)
        {
            buttonTexts[i - 1] = panel.transform.Find("Option" + i).Find("Text").GetComponent<Text>();
        }
	}
	
	public string[] SetAnswers(string[] possibleAnswers)
    {
        int correct = Random.Range(0, 4);
        buttonTexts[correct].text = possibleAnswers[0];
        string[] ret = new string[4];
        ret[correct] = possibleAnswers[0];
        int[] selectedNums = new int[] { -1, -1, -1, -1 };
        for (int i = 0; i < 4; i++)
        {
            // Since we already filled in the correct one, skip this
            if (i != correct)
            {
                int randNum = Random.Range(1, possibleAnswers.Length);
                while (selectedNums.Contains(randNum))
                {
                    randNum = Random.Range(1, possibleAnswers.Length);
                }
                selectedNums[i] = randNum;
                buttonTexts[i].text = possibleAnswers[randNum];
                ret[i] = buttonTexts[i].text;
            }
        }
        return ret;
    }

    public void SetActive(bool active)
    {
        quizCanvas.SetActive(active);
    }
}
