import Netscope from "react-native-impresa-netscope";
import Chartbeat from "react-native-impresa-chartbeat";

class RNImpresaAnalytics {
  constructor() {
    Chartbeat.setup();
  }

  isNetscopeConfigured = false;

  setupNetscope(appInfo, version, hitCollectorHost, scriptIdentifier) {
    Netscope.setupTracker(appInfo, version, hitCollectorHost, scriptIdentifier);
    isNetscopeConfigured = true;
  }

  sendAnalytics(message, { title }) {
    const value = String(message).toLowerCase();

    if (this.isNetscopeConfigured && message) {
      Netscope.sendAnalytics(value);
    }

    if (message && title) {
      Chartbeat.sendAnalytics(value, title);
    }
  }

  sendAnalyticsMenu(payload) {
    this.sendAnalytics(`menu/${payload}`);
  }

  sendAnalyticsAction(payload) {
    this.sendAnalytics(`action/${payload}`);
  }

  sendAnalyticsPage(payload) {
    this.sendAnalytics(`page/${payload}`);
  }
}

// Singleton
export default new RNImpresaAnalytics();
