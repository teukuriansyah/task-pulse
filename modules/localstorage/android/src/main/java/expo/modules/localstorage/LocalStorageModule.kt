package expo.modules.localstorage

import android.content.Context
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LocalStorageModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("LocalStorage")

    val context = appContext.reactContext

    Function("getData") {
      val sharedPref = context?.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE)
      val datas = sharedPref?.getString("data", "No Data") ?: "No Data"

      return@Function datas
    }

    Function("postData") { payload: String ->
      val sharedPref = context?.getSharedPreferences("MyPrefs", Context.MODE_PRIVATE)

      sharedPref?.edit()?.apply {
        putString("data", payload)
        apply()
      }

      return@Function "Success"
    }
  }
}