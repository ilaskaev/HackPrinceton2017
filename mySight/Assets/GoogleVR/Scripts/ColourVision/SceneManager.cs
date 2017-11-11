// Taken right from the GoogleVr.Demos DemoSceneManager.cs

using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
        Input.backButtonLeavesApp = true;
	}
	
	// Update is called once per frame
	void Update () {
		// Exit when (X) is tapped.
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Application.Quit();
        }
	}

    public void ChangeSceneTo(string name)
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName: name);
    }
}
