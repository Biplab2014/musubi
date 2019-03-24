package com.musubi.musubi;

import java.util.List;
import java.util.Arrays;
import android.app.Application;
import android.app.ActivityManager;
import android.content.ComponentName;
import com.facebook.soloader.SoLoader;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactApplication;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;


public class MainApplication extends Application implements ReactApplication {

    public static MainApplication instance;
    private static ReactApplicationContext sReactContext = null;
    public static void setReactContext(ReactApplicationContext rac) {
        sReactContext = rac;
    }

    public static MainApplication getInstance() {
        return instance;
    }

    public static ReactApplicationContext getReactContext() {
        return sReactContext;
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            ActivityManager am = (ActivityManager)getSystemService(ACTIVITY_SERVICE);
            List<ActivityManager.RunningTaskInfo> taskInfo = am.getRunningTasks(1);
            ComponentName componentInfo = taskInfo.get(0).topActivity;

            return Arrays.<ReactPackage>asList(
                    new MainReactPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }


    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
