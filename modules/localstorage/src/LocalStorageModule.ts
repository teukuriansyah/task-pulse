import { NativeModule, requireNativeModule } from 'expo';

declare class LocalStorageModule extends NativeModule<{}> {
  getData:() => string;
  postData:(payload:string) => string;
}

export default requireNativeModule<LocalStorageModule>('LocalStorage');
