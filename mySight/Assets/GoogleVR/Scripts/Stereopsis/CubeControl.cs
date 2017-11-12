using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Collections;

public class CubeControl : MonoBehaviour {

    public Material inactiveMaterial;
    public Material gazedAtMaterial;

	// Use this for initialization
	void Start () {
        SetGazedAt(false);
	}

    public Color PrincetonOrange()
    {

        return new Color(1F, (143F / 255F), 0F);
    }
 
    public void SetGazedAt(bool gazedAt)
    {
        if (inactiveMaterial != null && gazedAtMaterial != null)
        {
            GetComponent<Renderer>().material = gazedAt ? gazedAtMaterial : inactiveMaterial;
            return;
        }
        
        GetComponent<Renderer>().material.color = gazedAt ? PrincetonOrange() : Color.gray;
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
