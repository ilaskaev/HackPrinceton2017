using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeControl : MonoBehaviour {

    public Material inactiveMaterial;
    public Material gazedAtMaterial;

	// Use this for initialization
	void Start () {
        SetGazedAt(false);
	}

    public void SetGazedAt(bool gazedAt)
    {
        if (inactiveMaterial != null && gazedAtMaterial != null)
        {
            GetComponent<Renderer>().material = gazedAt ? gazedAtMaterial : inactiveMaterial;
            return;
        }
        GetComponent<Renderer>().material.color = gazedAt ? Color.green : Color.gray;
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
