import axios from "axios"
const derdevAPI = axios.create({
  baseURL: "https://der3-dev-106865.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return derdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return derdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return derdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_xsw_list(payload) {
  return derdevAPI.get(`/api/v1/xsw/`)
}
function api_v1_xsw_create(payload) {
  return derdevAPI.post(`/api/v1/xsw/`, payload)
}
function api_v1_xsw_retrieve(payload) {
  return derdevAPI.get(`/api/v1/xsw/${payload.id}/`)
}
function api_v1_xsw_update(payload) {
  return derdevAPI.put(`/api/v1/xsw/${payload.id}/`, payload)
}
function api_v1_xsw_partial_update(payload) {
  return derdevAPI.patch(`/api/v1/xsw/${payload.id}/`, payload)
}
function api_v1_xsw_destroy(payload) {
  return derdevAPI.delete(`/api/v1/xsw/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return derdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return derdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return derdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return derdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return derdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return derdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return derdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return derdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return derdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return derdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return derdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xsw_list,
  api_v1_xsw_create,
  api_v1_xsw_retrieve,
  api_v1_xsw_update,
  api_v1_xsw_partial_update,
  api_v1_xsw_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
