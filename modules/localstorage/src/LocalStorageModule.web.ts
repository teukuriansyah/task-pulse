import { registerWebModule, NativeModule } from 'expo';

// LocalStorageModule is not available on the web platform.
class LocalStorageModule extends NativeModule<{}> {}

export default registerWebModule(LocalStorageModule, 'LocalStorageModule');
