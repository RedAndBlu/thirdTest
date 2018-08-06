"use strict";

function Clock({ template }) {

  this._inTemplate = template;

};

Clock.prototype._render = function() {
  this.date = new Date();

  this.hours = this.date.getHours();
  if (this.hours < 10) this.hours = '0' + this.hours;

  this.mins = this.date.getMinutes();
  if (this.mins < 10) this.min = '0' + this.mins;

  this.secs = this.date.getSeconds();
  if (this.secs < 10) this.secs = '0' + this.secs;

  this.output = this._inTemplate.replace('h', this.hours).replace('m', this.mins).replace('s', this.secs);

  console.log(this.output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();

    this._timer = setInterval(this._render.bind(this), 1000);
};

let clock = new Clock({template: 'h:m:s'});
clock.start();
