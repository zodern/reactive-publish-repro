Meteor.publish('testReactive', function () {
  this.autorun(() => {
    const user = Meteor.users.findOne(this.userId, {
      fields: { "emails.address": 1 },
      sort: { _id: 1 },
      ordered: false
    });
    console.log('publish testReactive', user);
    return Meteor.users.find({ _id: this.userId }, {
      fields: { "emails.address": 1 }
    });
  });
});
