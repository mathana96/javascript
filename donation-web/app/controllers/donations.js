'use strict';

exports.home = {

  handler: function (request, reply) {
    reply.view('home', { title: 'Make a Donation' });
  },

};

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Donations to Date',
      donations: this.donations,
      // donor: this.currentUser.email,
    });
  },

};

exports.donate = {

  handler: function (request, reply) {
    const data = request.payload;
    data.donor = this.currentUser.email;
    console.log(data);
    this.donations.push(data);
    reply.redirect('/report');
  },

};
