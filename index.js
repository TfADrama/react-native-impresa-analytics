import Netscope from "react-native-impresa-netscope";
import Chartbeat from "react-native-impresa-chartbeat";

class RNImpresaAnalytics {
  constructor() {
    Netscope.setup();
    Chartbeat.setup();
  }

  static sendAnalytics(message, { title }) {
    const value = String(message).toLowerCase();

    Netscope.sendAnalytics(value);

    if (title) {
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
