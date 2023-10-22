// pinia可持久化存储
import { toRaw } from 'vue';
import { PiniaPluginContext } from 'pinia'

const _piniakey = 'pinia';

type Options = {
  key?:string
}

const setStrorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStrorage = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : { name: 'rarrot' };
};

const piniaPlugin = (options: Options) => {
  // 运用柯里化
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const data = getStrorage(`${options?.key ?? _piniakey}-${store.$id}`);
    // console.log("🚀  data", data);

    store.$subscribe(() => {
      // store.$state为proxy对象，需要通过toRaw()转换成原始对象
      setStrorage(`${options?.key ?? _piniakey}-${store.$id}`, toRaw(store.$state));
    });
    return { ...data };
  };
};

export default piniaPlugin; // 添加这一行
