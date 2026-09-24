Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Upload silktide-consent-manager.css and silktide-consent-manager.js to your website
3. Add the following code to your HTML page, inside the <head> tag, replacing "path/to/" with the location of the files on your site:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path/to/silktide-consent-manager.css">
<style id="silktide-consent-manager-overrides">
#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #FFFFFF;
  --backgroundColor: #050505;
  --textColor: #ffffff;
  --backdropBackgroundColor: #00000033;
  --backdropBackgroundBlur: 0px;
  --iconColor: #000000;
  --iconBackgroundColor: #ffffff;
}
</style>
<script src="path/to/silktide-consent-manager.js"></script>
<script>
window.silktideConsentManager.init({
  backdrop: {
    show: true
  },
  icon: {
    position: "bottomRight"
  },
  prompt: {
    position: "center"
  },
  consentTypes: [
    {
      id: "essential",
      label: "Essential",
      description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like the sites appearance and setting your privacy preferences.</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Essential consent type here');
      }
    }
  ],
  text: {
    prompt: {
      description: "<p>We use cookies on our site to enhance your user experience.</p>",
      acceptAllButtonText: "Accept essential cookies ",
      acceptAllButtonAccessibleLabel: "Accept essential cookies ",
      rejectNonEssentialButtonText: "Reject non-essential",
      rejectNonEssentialButtonAccessibleLabel: "Reject all non-essential cookies",
      preferencesButtonText: "Preferences",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: "Customize your cookie preferences",
      description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
      saveButtonText: "Save and close",
      saveButtonAccessibleLabel: "Save your cookie preferences",
      creditLinkText: "Get this banner for free",
      creditLinkAccessibleLabel: "Get this banner for free"
    }
  }
});
</script>

These files correspond to Silktide Consent Manager v2.0.1.
Prefer loading from the CDN instead? Get that snippet at https://silktide.com/consent-manager/install/
