var Activity = require('android.app.Activity');
var activity = new Activity(Ti.Android.currentActivity);
var ParkedTextView = require("com.goka.parkedtextview.ParkedTextView");
var TextWatcher = require("android.text.TextWatcher");
var parkedView = new ParkedTextView(activity);

parkedView.setParkedTextColor("#000000");
parkedView.setParkedHintColor("#999999");
parkedView.setParkedText(".slack.com");
parkedView.setHintText("your-team");

var textWatcher = new TextWatcher({
	afterTextChanged: afterTextChanged,
});


function afterTextChanged(s) {
	console.log("After: " + s + " " + parkedView.getTypedText());
}
parkedView.addTextChangedListener(textWatcher);
$.view_lbl.add(parkedView);
$.btn_clear.addEventListener("click",function(e){
	parkedView.setEmptyText();
})
$.index.open();
