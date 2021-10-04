package com.hoa_reactnative_template;
import android.os.Bundle;
import android.os.Handler;
import android.content.Intent;
import android.view.View;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
    //   setContentView(R.layout.splash);

    //   new Handler().postDelayed(new Runnable() {
    //     @Override
    //     public void run() {
    //      //This method will be executed once the timer is over
    //      // Start your app main activity
    //     Intent i = new Intent(MainActivity.class);
    //     startActivity(i);
    //      // close this activity
    //     finish();
    //     }
    //  }, 3000);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "hoa_reactnative_template";
  }
}
