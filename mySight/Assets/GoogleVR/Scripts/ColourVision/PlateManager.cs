using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlateManager : MonoBehaviour {
    [Tooltip("Reference to all Plates that can be used")]
    public Material[] materials;
    // Options are assuming that plates come in in order, which they should
    public string[][] options = new string[][] {
        new string[] { "12", "18", "1", "2", "13", "3", "8", "none" },
        new string[] { "8", "6", "3", "9", "18", "16", "13", "none" },
        new string[] { "29", "28", "38", "39", "3", "2", "9", "none"},
        new string[] { "5", "2", "none", "6", "8", "15", "12", "9"},
        new string[] { "3", "5", "none", "8", "9", "13", "18", "6"},
        new string[] { "15", "17", "none", "5", "7", "6", "16", "1"},
        new string[] { "74", "21", "none", "71", "24", "7", "2", "4"},
        new string[] { "6", "none", "8", "9", "16", "3", "5", "15"},
        new string[] { "45", "none", "48", "4", "5", "47", "17", "15"},
        new string[] { "5", "none", "2", "6", "8", "15", "12", "9"},
        new string[] { "7", "none", "2", "17", "12", "9", "8", "5"},
        new string[] { "16", "none", "18", "6", "8", "15", "5", "9"},
        new string[] { "73", "none", "78", "13", "18", "75", "15", "7"},
        new string[] { "none", "5", "15", "18", "13", "3", "8", "6"},
        new string[] { "none", "45", "4", "5", "15", "46", "48", "6"},
        new string[] { "26", "6", "2", "28", "8", "25", "5", "9"},
        new string[] { "42", "4", "2", "24", "12", "1", "72", "7"}
    };
    public GameObject plate;
    private int currPlate = 0;
    private int maxPlates;

    // Use this for initialization
    void Start()
    {
        maxPlates = options.Length;
        DoShuffle();
    }

    public void nextPlate()
    {
        currPlate = currPlate + 1;
        if (currPlate == maxPlates)
        {
            currPlate = 0;
            DoShuffle();
        }
        plate.GetComponent<Renderer>().material = materials[currPlate];
    }

    private void DoShuffle()
    {
        int n = materials.Length;
        while (n > 1)
        {
            n--;
            int k = Random.Range(0, n + 1);
            Material tempMat = materials[k];
            object tempOption = options.GetValue(k);
            materials[k] = materials[n];
            options.SetValue(options.GetValue(n), k);
            materials[n] = tempMat;
            options.SetValue(tempOption, n);
        }
    }

    public void SetActive(bool active)
    {
        plate.SetActive(active);
    }

    public string[] GetCurrentOptions()
    {
        return (string[])options.GetValue(currPlate);
    }
}
