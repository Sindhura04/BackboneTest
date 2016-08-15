var myRouter = Backbone.Router.extend({
    personalInfoView: null,
    addressInfoView: null,
    displayDetailsView: null,

    initialize: function() {
        this.personalInfo = new PersonalInfoModel();
    },

    routes: {
        "": "showPersonalInfoPage",
        "home": "showPersonalInfoPage",        
        "addressInfo": "showAddressInfoPage",
        "displayDetails": "showDetailsPage",
        "*actions": "handleInvalidRoutes"
    },

    showPersonalInfoPage: function() {
        if (this.personalInfoView == null) {
            this.personalInfoView = new View1({
                model: this.personalInfo
            });
        }
        this.personalInfoView.render();
    },

    showAddressInfoPage: function() {
        if (this.addressInfoView == null) {
            this.addressInfoView = new View2({
                model: this.personalInfo
            });
        }
        this.addressInfoView.render();
    },

    showDetailsPage: function() {
        if (this.displayDetailsView == null) {
            this.displayDetailsView = new View3({
                model: this.personalInfo
            });
        }
        this.displayDetailsView.render();
    },

    handleInvalidRoutes: function() {
        alert("Page not available, so redirecting to home page");
        this.navigate('home', {trigger: true});
    }
});