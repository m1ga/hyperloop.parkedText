// hyperloop classes
const Activity = require("android.app.Activity");
const LayoutParams = require("android.widget.FrameLayout.LayoutParams");
const ViewGroupLayoutParams = require("android.view.ViewGroup.LayoutParams");
const Gravity = require("android.view.Gravity");
const ParkedTextView = require("com.goka.parkedtextview.ParkedTextView");
const TextWatcher = require("android.text.TextWatcher");
const activity = new Activity(Ti.Android.currentActivity);
const parkedView = new ParkedTextView(activity);

// define parkedTextView options
parkedView.setParkedTextColor("#000000");
parkedView.setParkedHintColor("#999999");
parkedView.setParkedText(".slack.com");
parkedView.setHintText("your-team");

// layout parkedTextView
const layoutParams = new LayoutParams(ViewGroupLayoutParams.WRAP_CONTENT, ViewGroupLayoutParams.WRAP_CONTENT, Gravity.CENTER);
parkedView.setLayoutParams(layoutParams);

// add event watcher
const textWatcher = new TextWatcher({
	afterTextChanged: afterTextChanged,
});
function afterTextChanged(s) {
	console.log("After: " + s + " " + parkedView.getTypedText());
}
parkedView.addTextChangedListener(textWatcher);

// add view to app
$.view_lbl.add(parkedView);

// clear text button
function clearText(){
	parkedView.setEmptyText();
}

$.index.open();
