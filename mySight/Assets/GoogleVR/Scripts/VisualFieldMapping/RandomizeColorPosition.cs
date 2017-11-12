using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;



public class RandomizeColorPosition : MonoBehaviour {
    float x;
    float y;
    float z;
    float plusOrMinus;
    float count;
    Vector3 pos;
    // Use this for initialization
    void Start () {
        count = 0;
        Call();
    }

    public void Call()
    {
        count++;
        z = 0;
        x = Random.Range(50, 160);
        y = Random.Range(50, 160);

        plusOrMinus = Random.Range(0, 2) < 0.5 ? -1 : 1;
        x = x * plusOrMinus;

        plusOrMinus = Random.Range(0, 2) < 0.5 ? -1 : 1;
        y = y * plusOrMinus;

        pos = new Vector3(x, y, z);

        this.GetComponent<Image>().color = Random.ColorHSV(1f, 1f, 0f, 0f, 1f, 1f, 0.2f, 0.8f);
        this.GetComponent<Image>().transform.localPosition = pos;
    }

}
