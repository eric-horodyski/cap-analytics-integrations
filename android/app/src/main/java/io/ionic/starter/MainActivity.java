package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.newrelic.agent.android.NewRelic;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    NewRelic.withApplicationToken("AAf5387ca815ba6e368277b375b180ec1bc693bfdb-NRMA").start(this.getApplicationContext());
  }
}
