var View1 = Backbone.View.extend({
    el: "#rAppContainer",
    initialize: function() {
        this.render();
    },
    events: {
        "input input": "updateModel"
    },
    render: function() {
        var template = _.template($('#personalInfoTemplate').html());
        this.$el.html(template());
        return this;
    },
    updateModel: function(e) {
        var $elem = $(e.currentTarget);

        if ($elem.val() && $elem.val().trim() !== "") {
            value = $elem.val();
        }

        var modelAttribute = $elem.attr("name");
        this.model.set(modelAttribute, value);        
    }
});

var View2 = Backbone.View.extend({
    el: "#rAppContainer",
    initialize: function() {
        this.render();
    },
    events: {
        "input input": "updateModel"
    },
    render: function() {
        var template = _.template($('#addressTemplate').html());
        this.$el.html(template());
        return this;
    },
    updateModel: function(e) {
        var $elem = $(e.currentTarget);

        if ($elem.val() && $elem.val().trim() !== "") {
            value = $elem.val();
        }

        var modelAttribute = $elem.attr("name");
        this.model.set(modelAttribute, value);        
    }
});

var View3 = Backbone.View.extend({
    el: "#rAppContainer",
    initialize: function() {
        this.render();
    },    
    render: function() {
        var template = _.template($('#infoDisplayTemplate').html());
        this.$el.html(template(this.model.attributes));
        return this;
    }
});
