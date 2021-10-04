package com.hoa_reactnative_template;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Handler;
import com.facebook.react.ReactActivity;
import com.hoa_reactnative_template.MainActivity;

public class SplashScreenActivity extends ReactActivity {
    @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            setContentView(R.layout.splash);

            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                //This method will be executed once the timer is over
                // Start your app main activity

                startActivity(new Intent(SplashScreenActivity.this, MainActivity.class));

                // close this activity
                finish();
                }
            }, 3000);

            
        }
    }