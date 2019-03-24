package com.musubi.musubi;


import android.os.Bundle;
import android.util.Log;
import android.view.WindowManager;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    public static final String TAG = "MusubiMainActivity";

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "musubi";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        Log.i("LifeCycle", "onCreate invoked");

    }


    @Override
    protected void onStart(){
        super.onStart();
        Log.i("LifeCycle","onStart invoked");
    }


    @Override
    protected void onResume() {
        super.onResume();
        Log.i("LifeCycle","onResume invoked");
    }
    @Override
    protected void onPause() {
        super.onPause();
        Log.i("LifeCycle","onPause invoked");
    }

    @Override
    protected void onStop() {
        super.onStop();
    }


    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("LifeCycle","onRestart invoked");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("LifeCycle","onDestroy invoked");
    }

}