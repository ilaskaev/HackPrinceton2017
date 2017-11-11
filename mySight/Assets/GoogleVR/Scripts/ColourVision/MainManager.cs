using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainManager : MonoBehaviour {

    public GameObject plate;
    public PlateManager plateManager;
    public GameObject quizCanvas;
    public GameObject instructionCanvas;
	// Use this for initialization
	void Start () {
        plate.SetActive(false);
        quizCanvas.SetActive(false);
        instructionCanvas.SetActive(true);
	}

    public void ContinuePressed()
    {
        instructionCanvas.SetActive(false);
        plate.SetActive(true);
        StartCoroutine(ShowPictureFor(5));
    }

    private IEnumerator ShowPictureFor(int number)
    {
        yield return new WaitForSeconds(5);
        plate.SetActive(false);
        quizCanvas.SetActive(true);

    }
}
