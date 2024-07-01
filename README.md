# Image Similarity Search

## This is an Image Search demo built with [Weaviate](https://weaviate.io), [Next.js](https://nextjs.org/) and [OpenAI](https://openai.com/)

## Getting Started
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Loom | Free Screen &amp; Video Recording Software | Loom</title>
<!-- Cookie banner only available on marketing site for now. -->
<!-- Likely to be reenabled once ready to rollout onto webapp-client -->
<!-- <script nonce="7dLOpNUcvOnr4JfXCD+GUvsY36W8Qn3SjbqaN9pOmd6vQQUe" type="text/javascript">
  (function () {
    fetch('https://location.loom.com', {
      method: 'GET',
    })
      .then(response => {
        const targetCountries = [];
        const userCountry = response.headers.get('x-loom-country');

        if (targetCountries.includes(userCountry)) {
          const head = document.getElementsByTagName('head')[0];
          const js = document.createElement('script');

          js.type = 'text/javascript';
          js.src =
            'https://cmp.osano.com/AzytdUSlZ32371fP0/ba69bebe-a167-497d-9119-634931398b23/osano.js';

          head.append(js);
        }
      })
      .catch(() => {});
  })();
</script>
 -->


<meta name="slack-app-id" content="A9G1TH4S2">

<!-- SEO -->
<meta name="application-name" content="Loom" />
  <meta name="description" content="Use Loom to record quick videos of your screen and cam. Explain anything clearly and easily – and skip the meeting. An essential tool for hybrid workplaces." />

  <!-- open graph and twitter tags -->
    <meta property="og:site_name" content="Loom">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.loom.com">
  <meta property="og:title" content="Loom | Free Screen &amp; Video Recording Software">
      <meta property="og:description" content="Use Loom to record quick videos of your screen and cam. Explain anything clearly and easily – and skip the meeting. An essential tool for hybrid workplaces." />
    <meta property="og:image" content="https://cdn.loom.com/assets/img/og/loom-banner.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="600">
  <meta name="twitter:card" content="summary_large_image" />




<!-- Web App Icons -->
<meta name="application-name" content="Loom">
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#ffffff">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Loom">
<meta name="msapplication-TileColor" content="#b91d47">
<meta name="msapplication-TileImage" content="https://cdn.loom.com/assets/favicons-loom/mstile-150x150.png">

<link rel="icon" href="https://cdn.loom.com/assets/favicons-loom/favicon.ico" sizes="any">
<link rel="icon" href="https://cdn.loom.com/assets/favicons-loom/favicon.svg" type="image/svg+xml">
<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.loom.com/assets/favicons-loom/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="192x192" href="https://cdn.loom.com/assets/favicons-loom/android-chrome-192x192.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.loom.com/assets/favicons-loom/apple-touch-icon-180x180.png">
<link rel="mask-icon" color="#625df5" href="https://cdn.loom.com/assets/favicons-loom/safari-pinned-tab.svg">


  <link rel="stylesheet" href="https://cdn.loom.com/assets/css/475-0442cf643bedba3d6b94.css" />

  <link rel="stylesheet" href="https://cdn.loom.com/assets/css/7151-9c21aaa56104d91d4e49.css" />


<script nonce="7dLOpNUcvOnr4JfXCD+GUvsY36W8Qn3SjbqaN9pOmd6vQQUe">
  window._LOOM_ = "%7O%22OVYYVAT_ERPNCGPUN_FVGR_XRL%22%3N%226Yq-a7bHNNNNNWKXybyTXC7sCMus-WzaKnlg9CA5%22%2P%22PUEBZR_RKGRAFVBA_VQ%22%3N%22yvrpoqqzxvvvuarqbozyzvyyubqwxqzo%22%2P%22PYVRAG_YBT_YRIRY%22%3N%22sngny%2Preebe%2Pjnea%2Pvasb%22%2P%22PYBHQSEBAG_HEV%22%3N%22pqa.ybbz.pbz%22%2P%22NIFREIRE_PYBHQSEBAG_HEV%22%3N%22yhan.ybbz.pbz%22%2P%22RYRIVB_NPPBHAG_VQ%22%3N%225p7qp041087r9%22%2P%22TBBTYR_NCV_PYVRAG_VQ%22%3N%22443240113960-6zw529e3e24tcc4p9h57a9aqet01v911.nccf.tbbtyrhfrepbagrag.pbz%22%2P%22YBBZ_QRFXGBC_CEBGBPBY%22%3N%22ybbzQrfxgbc%3N%2S%2S%22%2P%22ZHK_RAI_XRL%22%3N%229ntt7cyq771c850zs45zfatc3%22%2P%22CHFU_FREIRE_CHOYVP_XRL%22%3N%22OSMAlOrBig4yrVK8OhRu7u2-7lFWCL2bSfWdV5HyfTxa57ZKc924pqoufgdF69Uz-IYo1wXEEm4LnRu7qTeFKFZ%22%2P%22FGEVCR_CHOYVP_XRL%22%3N%22cx_yvir_ZT87GpsZRyPHEEBsexfSFZ8k%22%2P%22QNGNQBT_EHZ_NCCYVPNGVBA_VQ%22%3N%227ns92855-r997-4q9o-nn41-839r1p64r6s3%22%2P%22QNGNQBT_EHZ_PYVRAG_GBXRA%22%3N%22choo1955571qp736r541o72313p6942242s%22%2P%22QNGNQBT_EHZ_RANOYR%22%3N%22gehr%22%2P%22QNGNQBT_EHZ_FREIVPR%22%3N%22ybbz-cebq%22%2P%22QNGNQBT_EHZ_FRFFVBA_FNZCYR_ENGR%22%3N%2215%22%2P%22QNGNQBT_EHZ_FRFFVBA_ERCYNL_FNZCYR_ENGR%22%3N%2215%22%2P%22QNGNQBT_YBT_PYVRAG_GBXRA%22%3N%22cho6n5r653719oonqp7o8q28o628o09oq41%22%2P%22QNGNQBT_YBT_RANOYR%22%3N%22gehr%22%2P%22QNGNQBT_YBT_FNZCYR_ENGR%22%3N%2210%22%2P%22QNGNQBT_YBT_FREIVPR%22%3N%22jroncc%22%2P%22YBBZ_FQX_NCV_XRL%22%3N%22677no500-qo70-4087-91ns-6rsqo06sss68%22%2P%22PNAAL_VB_NCC_VQ%22%3N%2258n6799q8q61o9968qnq922n%22%2P%22PBURER_PYVRAG_XRL%22%3N%22J-YswQFDvvMv-ud7T761GKB1%22%2P%22CNPXNTRF_PYBHQSEBAG_HEV%22%3N%22cnpxntrf.ybbz.pbz%22%2P%22FRAGEL_ERCYNLF_BA_REEBE_FNZCYR_ENGR%22%3N%220.001%22%2P%22SO_NCC_VQ%22%3N%221591221991190878%22%2P%22NABA_PBBXVR_QBZNVA%22%3N%22ybbz.pbz%22%2P%22YBBZ_ONER_HEV%22%3N%22ybbz.pbz%22%2P%22YBBZ_HEV%22%3N%22jjj.ybbz.pbz%22%2P%22ABQR_RAI%22%3N%22cebqhpgvba%22%2P%22YBBZ_IREFVBA%22%3N%22ro2rn86%22%2P%22YBBZ_ERPBEQ_JF_HEV%22%3N%22erpbeq.ybbz.pbz%22%2P%22NGYNFFVNA_BVQP_VAVGVNGVBA_EBHGR%22%3N%22uggcf%3N%2S%2Svq.ngynffvna.pbz%22%2P%22NQZVA_UHO_HEV%22%3N%22nqzva.ngynffvna.pbz%22%7Q";


  window.loomSSRUser = {"avatars":[{"name":"47799a2fc4334147942c961594b0e55f","large":"avatars/10026123_47799a2fc4334147942c961594b0e55f_1024.jpg","thumb":"avatars/10026123_47799a2fc4334147942c961594b0e55f_192.jpg"}],"email":"vpolegaisky@gmail.com","dbEmail":"vpolegaisky@gmail.com","first_name":"Ilya","last_name":"Kirsanov","triggers":{"desktop_stop_rec_tooltip":{"show":false,"complete":false},"education_user_upgraded_modal":{"show":true,"complete":false},"email_verified":{"show":false,"complete":false},"gmail_integration_share_page_upsell":{"show":true,"complete":false},"new_transcript_experience_owner":{"show":false,"complete":true},"new_transcript_experience_viewer":{"show":false,"complete":true},"request_push_permissions":{"show":true,"complete":false},"show_avatar_tooltip":{"show":true,"complete":false},"show_data_retention_warning":{"show":true,"complete":false},"show_download_video_info_modal":{"complete":true,"show":false},"show_get_started_checklist":{"show":false,"complete":false},"show_milestone_post_recording_celebration":{"show":false,"complete":true},"show_mobile_banner_prompt":{"show":true,"complete":false},"website_show_new_get_started_checklist_banner":{"show":false,"complete":false},"timeline_comment_ftux":{"show":true,"complete":false},"pro_feature_hd_recordings":{"show":false,"complete":false},"show_record_a_reply_tooltip":{"show":true,"complete":false},"show_web_permissions_prompt":{"show":true,"complete":false},"loom_greetings_startup_modal":{"show":true,"complete":false},"new_onboarding_existing_user":{"show":false,"complete":false},"show_first_video_share_modal":{"show":false,"complete":true},"loom_wru_video_reply_beta_tip":{"show":true,"complete":false},"pro_feature_custom_dimensions":{"show":false,"complete":false},"show_first_caption_experience":{"show":true,"complete":false},"show_member_video_threshold_banner":{"show":true,"complete":false},"show_first_filler_removal_experience":{"show":true,"complete":false},"chrome_extension_pro_trial_overlay_modal":{"show":false,"complete":false},"chrome_extension_trial_pro_features_banner":{"show":false,"complete":false},"extension_gmail_integration_composer_tooltip":{"show":false,"complete":false},"loom_greetings_recording_instruction_tooltip":{"show":false,"complete":false},"desktop_trial_ended_pre_recording_menu_banner":{"show":false,"complete":false},"chrome_extension_trial_ended_pre_recording_menu_banner":{"show":false,"complete":false}},"has_activated_desktop_app":false,"has_activated_chrome_extension":true,"has_activated_ios_app":false,"has_activated_android_app":false,"cacheVersion":2,"id":10026123,"basic_video_limit":25,"role":"client","is_primary":true,"company_name":null,"deletion_pending":null,"help_options":null,"tour_settings":null,"company_position":null,"status":"verified","aa_id":null,"aa_is_mastered":false,"aa_date_linked":null,"aa_date_mastered":null,"user_update_sequence_number":null,"capabilities":{"billing":true,"mac-app":true,"loom-pro":true,"windows-app":true,"hd-recording":true,"custom-branding":false,"end-of-video-cta":true,"custom-video-access":true,"custom-video-thumbs":true},"push_subscriptions":{"subscriptions":{}},"trial_status":null,"checklist":{"share_video":true,"has_viewed_videos":true,"first_video_viewed":true,"complete_onboarding":true,"first_video_recording":true},"num_credits":0,"recorder_settings":{},"tours":{"new_user_tour":"v1"},"notification_settings":{"video_read":true,"push_video_read":false,"push_video_comments":false,"push_weekly_digests":false,"all_comments_enabled":true,"push_comment_replies":false,"push_video_reactions":false,"push_video_trim_complete":false},"video_settings":{"use_gif":true,"use_emojis":true},"last_country":null,"integration_settings":{"integrate_jira":{"expand":true,"enabled":true},"integrate_gmail":{"expand":true,"enabled":true},"integrate_github":{"expand":true,"enabled":true},"integrate_gitlab":{"expand":true,"enabled":true},"integrate_dropbox":{"expand":true,"enabled":true},"integrate_intercom":{"expand":true,"enabled":true},"integrate_invision":{"expand":true,"enabled":true},"integrate_confluence":{"expand":true,"enabled":true},"integrate_salesforce":{"expand":true,"enabled":true},"integrate_google_docs":{"expand":true,"enabled":true},"integrate_hacker_news":{"expand":true,"enabled":true},"integrate_producthunt":{"expand":true,"enabled":true},"integrate_salesforce_iq":{"expand":true,"enabled":true}},"app_settings":{"sidebar_hidden":false},"timezone_offset":-180,"persona":{"persona_v1":{"role":null,"company":null,"complete":true,"use_cases":[],"company_size":null,"use_case_plan":"personal","education_type":null,"other_use_case":null,"company_industry":null,"company_size_exact":null,"sharing_intent_case":["I’m creating videos for a hobby or project"],"use_case_plan_persona":"For personal use"},"clearbit_backfilled":false,"clearbit_on_sign_up":true},"jtbd":{"deleted":false,"watched":[],"archived":false},"invite_counts":{},"onboarding":{},"email_change_count":0,"user_identity_id":"10007841","account_type":"team","tags":{},"default_workspace_id":"10053237","referrer_partner_id":null,"terms_accepted":true,"terms_accepted_created_at":"2021-04-09T07:30:29.589Z","createdAt":"2021-04-09T07:30:29.589Z","updatedAt":"2024-07-01T19:14:26.933Z","deletedAt":null,"selected_workspace_id":"10053237","is_sdk_shared_user":false,"has_gmail_account":true,"hasGmailAccount":true,"oauth":{"google":{"id":"104133574193069786142","medium":"google","email":"vpolegaisky@gmail.com","team_id":null,"team_name":null,"team_domain":null,"external_avatar":"https://lh3.googleusercontent.com/a/ACg8ocKZsbryx60UlqmiWPKugiZxtCZGyUHmOOXSGVAbshwlXAfvGZLy=s1024-c","createdAt":"2021-04-09T07:30:29.703Z","updatedAt":"2024-07-01T18:55:23.370Z"}},"hasWebPushSubscription":false,"password_is_set":false,"scopes":["ACCOUNT_NOTIFICATIONS","AUTHENTICATED_USER_ACCESS","AUTOJOIN_SIDEBAR","BLUR_ACCESS","CONTENT_UPLOAD_ACTION_READ","CONTENT_UPLOAD_ACTION_WRITE","CREATE_SPACE","CUSTOM_BRANDING_ACCESS","DEFAULT_CTA_ACCESS","ENGAGEMENT_INSIGHTS_ACCESS","ENGAGEMENT_INSIGHTS_ADMIN_ACCESS","ENGAGEMENT_INSIGHTS_CSV_ACCESS","FAVORITES","FILLER_WORD_REMOVAL_V1","HELP_BUBBLE_CONTACT_SUPPORT","IMAGE_CAPTURE_ACCESS","IMAGE_CTA_ACCESS","IMAGE_EDIT_OPTIONS_ACCESS","IMAGE_ENHANCED_CAPTURE_ACCESS","IMAGE_PASSWORD_PROTECT_ACTION","IMAGE_SETTINGS_ACCESS","IMAGE_SHARE_PRIVATE_ACTION","IMAGE_SHARE_WITH_TEAM_ACTION","IMAGE_TOOLS_ACCESS","INVITE_ADMIN_ACTION","INVITE_CREATOR_ACTION","INVITE_CREATOR_LITE_ACTION","LIVE_REWIND_ACCESS","MEMBERS_PAGE_CSV_DOWNLOAD","PASSWORD_RESET_ACTION","PERSONAL_ARCHIVE_READ","PERSONAL_ARCHIVE_WRITE","PERSONAL_LIBRARY_READ","PERSONAL_LIBRARY_WRITE","RECORDER_BROWSER_EXTENSION_ACCESS","RECORDING_TIMER_PAYWALL_LITE","RESEND_INVITE_ACTION","SEARCH_ACCESS","SUGGESTED_WORKSPACE_BANNER","SUGGESTED_WORKSPACE_SIDEBAR","SUGGESTED_WORKSPACE_WORKSPACE_SWITCHER","TEAM_ARCHIVE_READ","TEAM_ARCHIVE_WRITE","TEAM_LIBRARY_READ","TEAM_LIBRARY_WRITE","TRANSCRIPT_SEARCH_ACCESS","TRANSCRIPTION_ACCESS","UNLIMITED_CREATORS","UNLIMITED_VIEWERS","USER_STATE_WRITE","VIDEO_COMMUNITY_PUBLISH_ACCESS","VIDEO_CTA_ACCESS","VIDEO_DOWNLOAD_ACCESS","VIDEO_EDIT_BY_TRANSCRIPT_ACCESS","VIDEO_EDIT_OPTIONS_ACCESS","VIDEO_ENHANCED_RECORDER_ACCESS","VIDEO_GUEST_DELETE_ACCESS","VIDEO_PASSWORD_PROTECT_ACTION","VIDEO_PUBLISH_ACCESS","VIDEO_RECORD_ACCESS","VIDEO_SETTINGS_ACCESS","VIDEO_SHARE_PRIVATE_ACTION","VIDEO_THUMBNAIL_ACCESS","VIDEO_TOOLS_ACCESS","VIDEO_TRIM_ACCESS","VIDEO_WEAVE_ACCESS","VIEW_CREATE_SPACE","VIEW_SPACES_ONBOARDING_TOUR","WATCH_LATER","WORKSPACE_ADMIN_INSIGHTS_TAB","WORKSPACE_APPEARANCE_READ","WORKSPACE_APPEARANCE_WRITE","WORKSPACE_BILLING_ACCESS","WORKSPACE_CONTACT_IMPORT_INTEGRATION_READ","WORKSPACE_CONTACT_IMPORT_INTEGRATION_WRITE","WORKSPACE_DOMAIN_JOIN_MANAGE","WORKSPACE_GENERAL_ACCESS","WORKSPACE_INVITATIONS_CONTROL","WORKSPACE_PRIVACY_ACCESS","WORKSPACE_PRIVACY_PAYWALL","WORKSPACE_SSO_READ"],"aiAccess":{"autoTitles":true,"autoSummaries":true,"autoChapters":true,"autoTasks":true},"availableFtux":[{"name":"global_limit_banner","priority":0},{"name":"member_video_limit_banner","priority":0},{"name":"workspace_content_limit_banner","priority":0},{"name":"recorder_download_banner","priority":1},{"name":"creator_lite_member_limit_banner","priority":0},{"name":"continue_watching_mobile_banner","priority":1},{"name":"approaching_limit_banner","priority":1},{"name":"mobile_download_banner","priority":1},{"name":"member_video_threshold_banner","priority":1},{"name":"web_permissions_banner","priority":1},{"name":"data_retention_banner","priority":1},{"name":"synced_meetings_ftux_banner","priority":1},{"name":"global_admin_dunning_banner","priority":0},{"name":"global_admin_payment_authentication_banner","priority":0},{"name":"global_remediation_banner","priority":0},{"name":"loom_ai_addon_ftux","priority":0},{"name":"loom_ai_trial_ended_ftux","priority":0},{"name":"auto_chapters_ftux","priority":0},{"name":"trim_by_transcript_ftux","priority":0},{"name":"trim_by_transcript_share_page_ftux","priority":2},{"name":"pnp_update_sept_2023","priority":0},{"name":"email_gating_ftux","priority":0},{"name":"creator_salesforce_engagement_tracking_ftux","priority":0},{"name":"admin_salesforce_settings_ftux","priority":1},{"name":"pnp_update_nov_2023","priority":0},{"name":"eoy_2023_ftux","priority":1},{"name":"title_variables_ftux","priority":1},{"name":"seasonal_launch_tour","priority":0},{"name":"incentives_page_side_nav_ftux","priority":2},{"name":"share_page_onboarding_welcome_ftux","priority":1},{"name":"exp_ai_commenting_popover_ftux","priority":2},{"name":"exp_ai_commenting_button_pill_ftux","priority":2},{"name":"exp_ai_commenting_generate_question_animation_ftux","priority":2}],"workspaceId":10053237,"elevio_hash":"7f876228f4c3a7bec03f73da75cf375e4e8a8be5267de01aa34920a1b8afbed6","seasonalLaunchFtuxProperties":{"hasAiAddOn":false,"isPureTrial":false,"isFirstRecording":false,"workspaceRole":"admin","workspacePlan":"business"}};


  window.__APOLLO_STATE__ = {"Organization:10053237":{"__typename":"Organization","id":"10053237","is_pure_trial":false,"name":"Ilya's Workspace"},"OrganizationMember:10226284":{"__typename":"OrganizationMember","id":"10226284","member_role":"admin","member_status":"active","organization":{"__ref":"Organization:10053237"}},"OAuth:104133574193069786142":{"__typename":"OAuth","id":"104133574193069786142","email":"vpolegaisky@gmail.com","medium":"google","team_domain":null,"team_id":null,"team_name":null},"RegularUser:10026123":{"__typename":"RegularUser","id":"10026123","email":"vpolegaisky@gmail.com","first_name":"Ilya","last_name":"Kirsanov","account_type":"team","availableFtux":[{"__typename":"AvailableFtux","name":"global_limit_banner","priority":0},{"__typename":"AvailableFtux","name":"member_video_limit_banner","priority":0},{"__typename":"AvailableFtux","name":"workspace_content_limit_banner","priority":0},{"__typename":"AvailableFtux","name":"recorder_download_banner","priority":1},{"__typename":"AvailableFtux","name":"creator_lite_member_limit_banner","priority":0},{"__typename":"AvailableFtux","name":"continue_watching_mobile_banner","priority":1},{"__typename":"AvailableFtux","name":"approaching_limit_banner","priority":1},{"__typename":"AvailableFtux","name":"mobile_download_banner","priority":1},{"__typename":"AvailableFtux","name":"member_video_threshold_banner","priority":1},{"__typename":"AvailableFtux","name":"web_permissions_banner","priority":1},{"__typename":"AvailableFtux","name":"data_retention_banner","priority":1},{"__typename":"AvailableFtux","name":"synced_meetings_ftux_banner","priority":1},{"__typename":"AvailableFtux","name":"global_admin_dunning_banner","priority":0},{"__typename":"AvailableFtux","name":"global_admin_payment_authentication_banner","priority":0},{"__typename":"AvailableFtux","name":"global_remediation_banner","priority":0},{"__typename":"AvailableFtux","name":"loom_ai_addon_ftux","priority":0},{"__typename":"AvailableFtux","name":"loom_ai_trial_ended_ftux","priority":0},{"__typename":"AvailableFtux","name":"auto_chapters_ftux","priority":0},{"__typename":"AvailableFtux","name":"trim_by_transcript_ftux","priority":0},{"__typename":"AvailableFtux","name":"trim_by_transcript_share_page_ftux","priority":2},{"__typename":"AvailableFtux","name":"pnp_update_sept_2023","priority":0},{"__typename":"AvailableFtux","name":"email_gating_ftux","priority":0},{"__typename":"AvailableFtux","name":"creator_salesforce_engagement_tracking_ftux","priority":0},{"__typename":"AvailableFtux","name":"admin_salesforce_settings_ftux","priority":1},{"__typename":"AvailableFtux","name":"pnp_update_nov_2023","priority":0},{"__typename":"AvailableFtux","name":"eoy_2023_ftux","priority":1},{"__typename":"AvailableFtux","name":"title_variables_ftux","priority":1},{"__typename":"AvailableFtux","name":"seasonal_launch_tour","priority":0},{"__typename":"AvailableFtux","name":"incentives_page_side_nav_ftux","priority":2},{"__typename":"AvailableFtux","name":"share_page_onboarding_welcome_ftux","priority":1},{"__typename":"AvailableFtux","name":"exp_ai_commenting_popover_ftux","priority":2},{"__typename":"AvailableFtux","name":"exp_ai_commenting_button_pill_ftux","priority":2},{"__typename":"AvailableFtux","name":"exp_ai_commenting_generate_question_animation_ftux","priority":2}],"avatars":[{"__typename":"Avatar","iosLarge":"avatars/10026123_47799a2fc4334147942c961594b0e55f_1024.jpg","iosThumb":"avatars/10026123_47799a2fc4334147942c961594b0e55f_192.jpg","isAtlassianMastered":null,"large":"avatars/10026123_47799a2fc4334147942c961594b0e55f_1024.jpg","name":"47799a2fc4334147942c961594b0e55f","thumb":"avatars/10026123_47799a2fc4334147942c961594b0e55f_192.jpg"}],"basic_video_limit":25,"capabilities":{"billing":true,"mac-app":true,"loom-pro":true,"windows-app":true,"hd-recording":true,"custom-branding":false,"end-of-video-cta":true,"custom-video-access":true,"custom-video-thumbs":true},"checklist":{"__typename":"ChecklistItems","add_teammate":null,"complete_onboarding":true,"create_account":null,"customize_video_name":null,"download_recorder":null,"email_verified":null,"filled_account_settings":null,"first_video_recording":true,"first_video_upload":null,"first_video_viewed":true,"followed_us_on_twitter":null,"has_reached_recording_limit":null,"has_viewed_screenshots":null,"liked_us_on_facebook":null,"push_notification_enabled":null,"share_video":true,"shared_first_video_on_facebook":null,"tweeted_first_video":null},"company_name":null,"createdAt":"2021-04-09T07:30:29.589Z","default_workspace_id":"10053237","deletion_pending":null,"elevio_hash":"7f876228f4c3a7bec03f73da75cf375e4e8a8be5267de01aa34920a1b8afbed6","has_activated_android_app":false,"has_activated_chrome_extension":true,"has_activated_desktop_app":false,"has_activated_ios_app":false,"hasWebPushSubcription":false,"help_options":null,"integration_settings":{"integrate_jira":{"expand":true,"enabled":true},"integrate_gmail":{"expand":true,"enabled":true},"integrate_github":{"expand":true,"enabled":true},"integrate_gitlab":{"expand":true,"enabled":true},"integrate_dropbox":{"expand":true,"enabled":true},"integrate_intercom":{"expand":true,"enabled":true},"integrate_invision":{"expand":true,"enabled":true},"integrate_confluence":{"expand":true,"enabled":true},"integrate_salesforce":{"expand":true,"enabled":true},"integrate_google_docs":{"expand":true,"enabled":true},"integrate_hacker_news":{"expand":true,"enabled":true},"integrate_producthunt":{"expand":true,"enabled":true},"integrate_salesforce_iq":{"expand":true,"enabled":true}},"isEducationVerified":false,"isSdkSharedUser":false,"memberships({\"currentOnly\":true})":[{"__ref":"OrganizationMember:10226284"}],"notification_settings":{"video_read":true,"push_video_read":false,"push_video_comments":false,"push_weekly_digests":false,"all_comments_enabled":true,"push_comment_replies":false,"push_video_reactions":false,"push_video_trim_complete":false},"oauths":[{"__ref":"OAuth:104133574193069786142"}],"onboarding":{},"passwordIsSet":false,"persona":{"persona_v1":{"role":null,"company":null,"complete":true,"use_cases":[],"company_size":null,"use_case_plan":"personal","education_type":null,"other_use_case":null,"company_industry":null,"company_size_exact":null,"sharing_intent_case":["I’m creating videos for a hobby or project"],"use_case_plan_persona":"For personal use"},"clearbit_backfilled":false,"clearbit_on_sign_up":true},"recorder_settings":{},"role":"client","scopes":["ACCOUNT_NOTIFICATIONS","AUTHENTICATED_USER_ACCESS","AUTOJOIN_SIDEBAR","BLUR_ACCESS","CONTENT_UPLOAD_ACTION_READ","CONTENT_UPLOAD_ACTION_WRITE","CREATE_SPACE","CUSTOM_BRANDING_ACCESS","DEFAULT_CTA_ACCESS","ENGAGEMENT_INSIGHTS_ACCESS","ENGAGEMENT_INSIGHTS_ADMIN_ACCESS","ENGAGEMENT_INSIGHTS_CSV_ACCESS","FAVORITES","FILLER_WORD_REMOVAL_V1","HELP_BUBBLE_CONTACT_SUPPORT","IMAGE_CAPTURE_ACCESS","IMAGE_CTA_ACCESS","IMAGE_EDIT_OPTIONS_ACCESS","IMAGE_ENHANCED_CAPTURE_ACCESS","IMAGE_PASSWORD_PROTECT_ACTION","IMAGE_SETTINGS_ACCESS","IMAGE_SHARE_PRIVATE_ACTION","IMAGE_SHARE_WITH_TEAM_ACTION","IMAGE_TOOLS_ACCESS","INVITE_ADMIN_ACTION","INVITE_CREATOR_ACTION","INVITE_CREATOR_LITE_ACTION","LIVE_REWIND_ACCESS","MEMBERS_PAGE_CSV_DOWNLOAD","PASSWORD_RESET_ACTION","PERSONAL_ARCHIVE_READ","PERSONAL_ARCHIVE_WRITE","PERSONAL_LIBRARY_READ","PERSONAL_LIBRARY_WRITE","RECORDER_BROWSER_EXTENSION_ACCESS","RECORDING_TIMER_PAYWALL_LITE","RESEND_INVITE_ACTION","SEARCH_ACCESS","SUGGESTED_WORKSPACE_BANNER","SUGGESTED_WORKSPACE_SIDEBAR","SUGGESTED_WORKSPACE_WORKSPACE_SWITCHER","TEAM_ARCHIVE_READ","TEAM_ARCHIVE_WRITE","TEAM_LIBRARY_READ","TEAM_LIBRARY_WRITE","TRANSCRIPT_SEARCH_ACCESS","TRANSCRIPTION_ACCESS","UNLIMITED_CREATORS","UNLIMITED_VIEWERS","USER_STATE_WRITE","VIDEO_COMMUNITY_PUBLISH_ACCESS","VIDEO_CTA_ACCESS","VIDEO_DOWNLOAD_ACCESS","VIDEO_EDIT_BY_TRANSCRIPT_ACCESS","VIDEO_EDIT_OPTIONS_ACCESS","VIDEO_ENHANCED_RECORDER_ACCESS","VIDEO_GUEST_DELETE_ACCESS","VIDEO_PASSWORD_PROTECT_ACTION","VIDEO_PUBLISH_ACCESS","VIDEO_RECORD_ACCESS","VIDEO_SETTINGS_ACCESS","VIDEO_SHARE_PRIVATE_ACTION","VIDEO_THUMBNAIL_ACCESS","VIDEO_TOOLS_ACCESS","VIDEO_TRIM_ACCESS","VIDEO_WEAVE_ACCESS","VIEW_CREATE_SPACE","VIEW_SPACES_ONBOARDING_TOUR","WATCH_LATER","WORKSPACE_ADMIN_INSIGHTS_TAB","WORKSPACE_APPEARANCE_READ","WORKSPACE_APPEARANCE_WRITE","WORKSPACE_BILLING_ACCESS","WORKSPACE_CONTACT_IMPORT_INTEGRATION_READ","WORKSPACE_CONTACT_IMPORT_INTEGRATION_WRITE","WORKSPACE_DOMAIN_JOIN_MANAGE","WORKSPACE_GENERAL_ACCESS","WORKSPACE_INVITATIONS_CONTROL","WORKSPACE_PRIVACY_ACCESS","WORKSPACE_PRIVACY_PAYWALL","WORKSPACE_SSO_READ"],"status":"verified","triggers":[{"__typename":"CompletableTrigger","complete":false,"name":"desktop_stop_rec_tooltip","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"education_user_upgraded_modal","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"email_verified","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"gmail_integration_share_page_upsell","show":true},{"__typename":"CompletableTrigger","complete":true,"name":"new_transcript_experience_owner","show":false},{"__typename":"CompletableTrigger","complete":true,"name":"new_transcript_experience_viewer","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"request_push_permissions","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"show_avatar_tooltip","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"show_data_retention_warning","show":true},{"__typename":"CompletableTrigger","complete":true,"name":"show_download_video_info_modal","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"show_get_started_checklist","show":false},{"__typename":"CompletableTrigger","complete":true,"name":"show_milestone_post_recording_celebration","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"show_mobile_banner_prompt","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"website_show_new_get_started_checklist_banner","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"timeline_comment_ftux","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"pro_feature_hd_recordings","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"show_record_a_reply_tooltip","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"show_web_permissions_prompt","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"loom_greetings_startup_modal","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"new_onboarding_existing_user","show":false},{"__typename":"CompletableTrigger","complete":true,"name":"show_first_video_share_modal","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"loom_wru_video_reply_beta_tip","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"pro_feature_custom_dimensions","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"show_first_caption_experience","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"show_member_video_threshold_banner","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"show_first_filler_removal_experience","show":true},{"__typename":"CompletableTrigger","complete":false,"name":"chrome_extension_pro_trial_overlay_modal","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"chrome_extension_trial_pro_features_banner","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"extension_gmail_integration_composer_tooltip","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"loom_greetings_recording_instruction_tooltip","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"desktop_trial_ended_pre_recording_menu_banner","show":false},{"__typename":"CompletableTrigger","complete":false,"name":"chrome_extension_trial_ended_pre_recording_menu_banner","show":false}],"video_settings":{"use_gif":true,"use_emojis":true}},"ROOT_QUERY":{"__typename":"Query","getCurrentUser":{"__typename":"GetCurrentUserPayload","user":{"__ref":"RegularUser:10026123"}}}};

</script>


  </head>

  <body>
    <main id="container"></main>

    <script nonce="7dLOpNUcvOnr4JfXCD+GUvsY36W8Qn3SjbqaN9pOmd6vQQUe" type="text/javascript">
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://evs.sgmt.loom.com/yhPeelcEJD/eejxbDiFfK.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
  analytics.load("rggRFsCK29LOKVGyTLpt9xoXVhNNXaP6", { "integrations": {"Elevio":true,"Google Analytics":true,"FullStory":false} });

  

  }}();
</script>

    
  <script src="https://cdn.loom.com/assets/js/0runtime-d055bf2f47930acdf4c2.js"></script>

  <script src="https://cdn.loom.com/assets/js/react-vendor-c474dbfb92d4685475fa.js"></script>

  <script src="https://cdn.loom.com/assets/js/8056-0ed6235fc0dfed575b72.js"></script>

  <script src="https://cdn.loom.com/assets/js/3797-767914e024f58069f795.js"></script>

  <script src="https://cdn.loom.com/assets/js/4601-67db7fe87dcf5b902ba9.js"></script>

  <script src="https://cdn.loom.com/assets/js/5779-0b159bfc80d6b98a25cc.js"></script>

  <script src="https://cdn.loom.com/assets/js/9245-40891b0d53ebb5c772b3.js"></script>

  <script src="https://cdn.loom.com/assets/js/7191-9715cc5337c612b44dd2.js"></script>

  <script src="https://cdn.loom.com/assets/js/8558-fdb13b41effa5e3ea3d8.js"></script>

  <script src="https://cdn.loom.com/assets/js/8326-29159f5c8825a8624bc0.js"></script>

  <script src="https://cdn.loom.com/assets/js/6441-b24ec428cbcf2db28400.js"></script>

  <script src="https://cdn.loom.com/assets/js/8123-309122ffbcb90afda093.js"></script>

  <script src="https://cdn.loom.com/assets/js/6732-0b00ddf0e00de76cec38.js"></script>

  <script src="https://cdn.loom.com/assets/js/75-b565e5eebcc1860f6f5a.js"></script>

  <script src="https://cdn.loom.com/assets/js/7273-6245f8836251c7803331.js"></script>

  <script src="https://cdn.loom.com/assets/js/9808-d7084accc9faf33dff9f.js"></script>

  <script src="https://cdn.loom.com/assets/js/8474-bec430fd68dee94cb9ef.js"></script>

  <script src="https://cdn.loom.com/assets/js/8256-b286834300f61b5a9c0b.js"></script>

  <script src="https://cdn.loom.com/assets/js/4029-a2733125a63b0b71420d.js"></script>

  <script src="https://cdn.loom.com/assets/js/7718-48ce291fe6f32c177a83.js"></script>

  <script src="https://cdn.loom.com/assets/js/7781-354856275af0a6b1d36c.js"></script>

  <script src="https://cdn.loom.com/assets/js/5382-0e94c75c9b450c6890f0.js"></script>

  <script src="https://cdn.loom.com/assets/js/475-c18813fce932e2436269.js"></script>

  <script src="https://cdn.loom.com/assets/js/1464-7791f3eeb06ae5ad9a52.js"></script>

  <script src="https://cdn.loom.com/assets/js/2922-2acc5f13e829f3c87eb9.js"></script>

  <script src="https://cdn.loom.com/assets/js/4698-73147b436963650a1f0b.js"></script>

  <script src="https://cdn.loom.com/assets/js/2094-a549397ceae307bb47a2.js"></script>

  <script src="https://cdn.loom.com/assets/js/6266-9d3ab8f68e837f794b01.js"></script>

  <script src="https://cdn.loom.com/assets/js/9360-81cdf75ad4ed8c413d4a.js"></script>

  <script src="https://cdn.loom.com/assets/js/1138-26547258a39115b2c9aa.js"></script>

  <script src="https://cdn.loom.com/assets/js/437-bdd5383ea044207fa5cb.js"></script>

  <script src="https://cdn.loom.com/assets/js/7151-7e9ce8bc31da5c8253b2.js"></script>

  <script src="https://cdn.loom.com/assets/js/destination-24ae349f1228b96bef0d.js"></script>


  </body>
</html>


https://github.com/rejth/weaviate-image-search/assets/48617824/1239656e-34ba-4c27-96f7-3fd945367730


### Create a Weaviate database

Create a Weaviate cloud sandbox instance as described in [this guide](https://weaviate.io/developers/wcs/quickstart).
Collect the `API key` and `URL` from the `Details` tab in Weaviate Cloud (WCD).

### Create a `.env` file and add the following API keys

- your OpenAI API key as `OPENAI_APIKEY` (you can get this in your [OpenAI platform settings](https://platform.openai.com/api-keys))
- your Weaviate API key as `WCD_API_KEY` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
- your Weaviate host URL as `WCD_URL` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)

### Running Weaviate

To start the Weaviate instance, run the following command using the `docker-compose.yml` file.

```bash
docker compose up -d
```

### Importing Data

> Before you can import data, add any images in the `public/images` folder.

To install all project dependencies, run:

```bash
npm i
```

To import your data into Weaviate and initialize a collection, run the following:

```bash
npm run import
```

### Running your web app

> Ensure your Weaviate instance runs with imported data before starting your web app.

To run the web app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
