(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by pawelposel on 13/02/2017.
 */

Stage.defineWidget({
    id: "buttonLink",
    name: "Button link",
    description: 'Opens provided URL in a different tab',
    initialWidth: 2,
    initialHeight: 4,
    showHeader: false,
    showBorder: false,
    initialConfiguration: [{ id: "label", name: "Button label", default: "Button Link", type: Stage.Basic.GenericField.STRING }, { id: "url", name: "URL address", default: "", type: Stage.Basic.GenericField.STRING }],
    isReact: true,

    render: function render(widget, data, error, toolbox) {
        var Button = Stage.Basic.Button;

        return React.createElement(Button, { className: "labeled icon", color: "green", fluid: true, icon: "external", disabled: !widget.configuration.url,
            onClick: function onClick() {
                window.open(widget.configuration.url, '_blank');
            },
            content: widget.configuration.label });
    }

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3aWRnZXRzL2J1dHRvbkxpbmsvc3JjL3dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFJQSxNQUFNLFlBQU4sQ0FBbUI7QUFDZixRQUFJLFlBRFc7QUFFZixVQUFNLGFBRlM7QUFHZixpQkFBYSx1Q0FIRTtBQUlmLGtCQUFjLENBSkM7QUFLZixtQkFBZSxDQUxBO0FBTWYsZ0JBQVksS0FORztBQU9mLGdCQUFZLEtBUEc7QUFRZiwwQkFBc0IsQ0FDbEIsRUFBQyxJQUFJLE9BQUwsRUFBYSxNQUFNLGNBQW5CLEVBQW1DLFNBQVMsYUFBNUMsRUFBMkQsTUFBTSxNQUFNLEtBQU4sQ0FBWSxZQUFaLENBQXlCLE1BQTFGLEVBRGtCLEVBRWxCLEVBQUMsSUFBSSxLQUFMLEVBQVcsTUFBTSxhQUFqQixFQUFnQyxTQUFTLEVBQXpDLEVBQTZDLE1BQU0sTUFBTSxLQUFOLENBQVksWUFBWixDQUF5QixNQUE1RSxFQUZrQixDQVJQO0FBWWYsYUFBUyxJQVpNOztBQWNmLFlBQVEsZ0JBQVMsTUFBVCxFQUFnQixJQUFoQixFQUFxQixLQUFyQixFQUEyQixPQUEzQixFQUFvQztBQUN4QyxZQUFJLFNBQVMsTUFBTSxLQUFOLENBQVksTUFBekI7O0FBRUEsZUFDSSxvQkFBQyxNQUFELElBQVEsV0FBVSxjQUFsQixFQUFpQyxPQUFNLE9BQXZDLEVBQStDLFdBQS9DLEVBQXFELE1BQUssVUFBMUQsRUFBcUUsVUFBVSxDQUFDLE9BQU8sYUFBUCxDQUFxQixHQUFyRztBQUNRLHFCQUFTLG1CQUFJO0FBQUMsdUJBQU8sSUFBUCxDQUFZLE9BQU8sYUFBUCxDQUFxQixHQUFqQyxFQUFzQyxRQUF0QztBQUFnRCxhQUR0RTtBQUVRLHFCQUFTLE9BQU8sYUFBUCxDQUFxQixLQUZ0QyxHQURKO0FBTUg7O0FBdkJjLENBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBwYXdlbHBvc2VsIG9uIDEzLzAyLzIwMTcuXG4gKi9cblxuU3RhZ2UuZGVmaW5lV2lkZ2V0KHtcbiAgICBpZDogXCJidXR0b25MaW5rXCIsXG4gICAgbmFtZTogXCJCdXR0b24gbGlua1wiLFxuICAgIGRlc2NyaXB0aW9uOiAnT3BlbnMgcHJvdmlkZWQgVVJMIGluIGEgZGlmZmVyZW50IHRhYicsXG4gICAgaW5pdGlhbFdpZHRoOiAyLFxuICAgIGluaXRpYWxIZWlnaHQ6IDQsXG4gICAgc2hvd0hlYWRlcjogZmFsc2UsXG4gICAgc2hvd0JvcmRlcjogZmFsc2UsXG4gICAgaW5pdGlhbENvbmZpZ3VyYXRpb246IFtcbiAgICAgICAge2lkOiBcImxhYmVsXCIsbmFtZTogXCJCdXR0b24gbGFiZWxcIiwgZGVmYXVsdDogXCJCdXR0b24gTGlua1wiLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuU1RSSU5HfSxcbiAgICAgICAge2lkOiBcInVybFwiLG5hbWU6IFwiVVJMIGFkZHJlc3NcIiwgZGVmYXVsdDogXCJcIiwgdHlwZTogU3RhZ2UuQmFzaWMuR2VuZXJpY0ZpZWxkLlNUUklOR31cbiAgICBdLFxuICAgIGlzUmVhY3Q6IHRydWUsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKHdpZGdldCxkYXRhLGVycm9yLHRvb2xib3gpIHtcbiAgICAgICAgdmFyIEJ1dHRvbiA9IFN0YWdlLkJhc2ljLkJ1dHRvbjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsYWJlbGVkIGljb25cIiBjb2xvcj1cImdyZWVuXCIgZmx1aWQgaWNvbj1cImV4dGVybmFsXCIgZGlzYWJsZWQ9eyF3aWRnZXQuY29uZmlndXJhdGlvbi51cmx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57d2luZG93Lm9wZW4od2lkZ2V0LmNvbmZpZ3VyYXRpb24udXJsLCAnX2JsYW5rJyl9fVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt3aWRnZXQuY29uZmlndXJhdGlvbi5sYWJlbH0vPlxuICAgICAgICApO1xuXG4gICAgfVxuXG59KTsiXX0=
