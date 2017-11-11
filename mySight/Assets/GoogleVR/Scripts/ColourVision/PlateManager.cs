using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlateManager : MonoBehaviour {
    [Tooltip("Reference to all Plates that can be used")]
    public Material[] materials;
    public GameObject plate;

    // Use this for initialization
    void Start()
    {

    }

    public void setPlate()
    {
        plate.GetComponent<Renderer>().material = materials[(int)Random.Range(0, 3)];
    }
}
