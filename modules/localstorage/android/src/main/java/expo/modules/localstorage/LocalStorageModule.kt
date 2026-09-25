package expo.modules.localstorage

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LocalStorageModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("LocalStorage")

    Function("getData"){
      val sharedPref = context.getPreferences(Context.MODE_PRIVATE)

      val datas = sharedPref.getString("data","No Data")

      return@Function datas
    }
    
    Function("postData"){ payload:String ->
      val sharedPref = context.getPreferences(Context.MODE_PRIVATE)

      val editor = sharedPref.editor()

      editor.putString("data",payload)
      editor.apply()

      return@Function "Success"
    }
  }
}
