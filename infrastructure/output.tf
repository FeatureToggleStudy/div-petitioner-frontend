output "idam_api_url" {
  value = "${var.idam_api_url}"
}

output "feature_toggle_api_url" {
  value = "${var.feature_toggle_api_url}${var.feature_toggle_api_base_path}"
}

output "case_progression_service_draft_url" {
  value = "${local.case_progression_service_url}${var.draft_store_api_base_path}"
}

output "feature_idam" {
  value = "${var.feature_idam}"
}

output "feature_full_payment_event_data_submission" {
  value = "${var.feature_full_payment_event_data_submission}"
}
output "feature_idam" {
  value = "${var.feature_idam}"
}
