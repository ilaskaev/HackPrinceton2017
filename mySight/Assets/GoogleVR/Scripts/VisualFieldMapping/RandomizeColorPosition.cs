using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;



public class RandomizeColorPosition : MonoBehaviour {
    private float x;
    private float y;
    private float z;
    private float currTime;
    private float plusOrMinus;
    private float count;
    private float maxCount;
    private Vector3 pos;
    private float nextFlash;
    private float flashRate;
    private float min;
    private float max;

    public GameObject instructionCanvas;
    public GameObject taskCanvas;
    public GameObject finalCanvas;
    public GameObject cubeRoom;

    // Use this for initialization
    void Start () {
        min = 100;
        max = 200;
        count = 0;
        maxCount = 10;
        flashRate = 2; // in seconds
        nextFlash = Time.time + flashRate;
        Call();
    }

    public void Update()
    {
        if (Time.time > nextFlash)
        {
            nextFlash = Time.time + flashRate;
            Call();
        }
    }

    public void Call()
    {
        nextFlash = Time.time + flashRate;
        if (count >= maxCount)
        {
            Finish();
            return;
        }
        
        z = 3;
        x = Random.Range(min, max);
        y = Random.Range(min, max);

        plusOrMinus = Random.Range(0, 2) < 0.5 ? -1 : 1;
        x = x * plusOrMinus;

        plusOrMinus = Random.Range(0, 2) < 0.5 ? -1 : 1;
        y = y * plusOrMinus;

        pos = new Vector3(x, y, z);

        this.GetComponent<Image>().color = Random.ColorHSV(1f, 1f, 0f, 0f, 1f, 1f, 0.2f, 0.8f);
        this.GetComponent<Image>().transform.localPosition = pos;

        count++;
    }

    public void Finish()
    {
        count = 0;

        instructionCanvas.SetActive(false);
        taskCanvas.SetActive(false);
        finalCanvas.SetActive(true);
        cubeRoom.SetActive(true);
    }

}
