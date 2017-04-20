'use strict';
import AutoLayout from 'autolayout';

function test_autolayout() {
    var constraints = AutoLayout.VisualFormat.parse([
        'H:|[view1(==view2)]-10-[view2]|',
        'V:|[view1,view2]|'
    ], {extended: true});
    var view = new AutoLayout.View({constraints: constraints});
    view.setSize(400, 500);

    // {left: 0, top: 0, width: 195, height: 500}
    console.log(view.subViews.view1);
    // {left: 205, top: 0, width: 195, height: 500}
    console.log(view.subViews.view2);
}

export default test_autolayout;
