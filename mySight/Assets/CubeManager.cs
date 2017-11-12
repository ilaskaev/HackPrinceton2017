using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CubeManager : MonoBehaviour {
    private Vector3 startingPosition;
    private Vector3 cameraPosition;
    public GameObject[] cubes;
    public GameObject finalCanvas;
    private int correct = 0;
    private int total = 0;
    private int numTests = 5;

	// Use this for initialization
	void Start () {
        cameraPosition = Camera.main.transform.localPosition;
        startingPosition = transform.localPosition;
	}

    public void Begin()
    {
        InitCubes();
    }
	
    private void InitCubes()
    {
        foreach (GameObject cube in cubes)
        {
            cube.transform.localPosition = getNewLocation();
            cube.SetActive(true);
        }
    }

    private Vector3 getNewLocation()
    {
        float xDiff = generateRandValue(-3, 3);
        float zDiff = generateRandValue(-2, 2);
        return new Vector3(cameraPosition.x + xDiff, startingPosition.y, startingPosition.z + zDiff);
    }

    private float generateRandValue(int min, int max)
    {
        return Random.value * Mathf.Abs(max - min) + min;
    }

    public void TeleportRandomly(int cubeNum)
    {
        Transform clickedCube = cubes[cubeNum].transform;
        Transform otherCube = cubes[1-cubeNum].transform;

        float distanceToClicked = distanceFromCamera(clickedCube.localPosition);
        float distanceToOther = distanceFromCamera(otherCube.localPosition);

        if (distanceToClicked < distanceToOther)
        {
            correct++;
        }
        total++;

        if (total >= numTests)
        {
            foreach (GameObject cube in cubes)
            {
                cube.SetActive(false);
            }
            Text results = finalCanvas.transform.Find("Results").GetComponent<Text>();
            results.text = "Out of " + numTests + " attempts, you successfully chose the closer cube " + correct + " times!";
            if (correct == 5)
            {
                results.text += "\nYour depth perception is spot on! Feel free to try again and bask in the glory of knowing you have exception depth perception.";
            } else if (correct >= 3)
            {
                results.text += "\nYou're depth perception is lagging behind a bit. Maybe it was a bad day, you should try again!";
            } else
            {
                results.text += "\nYou're results indicate that you should go see an optometrist and get your depth perception tested as a precautionary measure.";
            }
            finalCanvas.SetActive(true);
        }

        else
        {
            foreach (GameObject cube in cubes)
            {
                cube.transform.localPosition = getNewLocation();
            }
        }
    }

    public float distanceFromCamera(Vector3 clickedCube)
    {
        return Vector3.Distance(cameraPosition, clickedCube);
    }

    // Update is called once per frame
    void Update () {
		
	}
}
