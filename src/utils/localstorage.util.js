//https://gist.github.com/rlemon/4989624

export function store_data(data, key) {

  if (!window.localStorage || !window.JSON || !key) {
        return;
    }
  window.localStorage.setItem(key, JSON.stringify(data))
}

export function get_data(key) {

  if (!window.localStorage || !window.JSON || !key) {
       return;
   }

   const item = window.localStorage.getItem(key);

   if (!item) {
       return;
   }
   return JSON.parse(item);
}

export function remove_data(key) {

  if (!window.localStorage || !window.JSON || !key) {
       return;
   }
   window.localStorage.removeItem(key);
}
