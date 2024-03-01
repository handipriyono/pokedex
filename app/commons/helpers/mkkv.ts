import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

//use below on expo go
// const storages = {
//   set: (key: string, value: any) => {},
//   get: (key: string) => {},
// };

// export const storage = storages;
