using UnityEngine;
using GoogleVR;

public class GVRManager : MonoBehaviour {
    public GameObject m_launchVrHomeButton;
    public InputManager m_inputManager;

	// Use this for initialization
	void Start () {
#if !UNITY_ANDROID || UNITY_EDITOR
        if (m_launchVrHomeButton == null)
        {
            return;
        }
        m_launchVrHomeButton.SetActive(false);
#else
        GvrDaydreamApi.CreateAsync((success) => {
            if (!success) {
                // Unexpected. See GvrDaydreamApi log messages for details.
                Debug.LogError("GvrDaydreamApi.CreateAsync() failed");
            }
        });
#endif // !UNITY_ANDROID || UNITY_EDITOR
    }

#if UNITY_ANDROID && !UNITY_EDITOR
    void Update() {
      if (m_launchVrHomeButton == null || m_inputManager == null) {
        return;
      }
      m_launchVrHomeButton.SetActive(m_inputManager.IsCurrentlyDaydream());
    }
#endif  // UNITY_ANDROID && !UNITY_EDITOR

    public void LaunchVrHome()
    {
#if UNITY_ANDROID && !UNITY_EDITOR
      GvrDaydreamApi.LaunchVrHomeAsync((success) => {
        if (!success) {
          // Unexpected. See GvrDaydreamApi log messages for details.
          Debug.LogError("GvrDaydreamApi.LaunchVrHomeAsync() failed");
        }
      });
#endif  // UNITY_ANDROID && !UNITY_EDITOR
    }
}

