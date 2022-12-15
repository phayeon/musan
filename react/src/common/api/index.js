import axios from "axios";
const server = `http://localhost:8000`
export const applogin = req => axios.get(`${server}/common/applogin`, req)
export const appmain = req => axios.post(`${server}/common/appmain`, req)
export const appmainrent = req => axios.post(`${server}/common/appmainrent`, req)
export const appsetpayinfo = req => axios.post(`${server}/common/appsetpayinfo`, req)
export const appsetpaymodify = req => axios.post(`${server}/common/appsetpaymodify`, req)
export const appsetsettings = req => axios.post(`${server}/common/appsetsettings`, req)
export const appsetuinfo = req => axios.post(`${server}/common/appsetuinfo`, req)
export const appstart = req => axios.post(`${server}/common/appstart`, req)
export const main = req => axios.post(`${server}/common/main`, req)
export const mngclaim = req => axios.post(`${server}/common/mngclaim`, req)
export const mngdemand = req => axios.post(`${server}/common/mngdemand`, req)
export const mngmenu = req => axios.post(`${server}/common/mngmenu`, req)
export const mngnotice = req => axios.post(`${server}/common/mngnotice`, req)
export const mnguserinfo = req => axios.post(`${server}/common/mnguserinfo`, req)
