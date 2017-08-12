(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by pawelposel on 04/11/2016.
 */

Stage.defineWidget({
    id: "serversNum",
    name: "Number of servers",
    description: 'Number of servers',
    initialWidth: 2,
    initialHeight: 8,
    color: "red",
    showHeader: false,
    isReact: true,
    initialConfiguration: [Stage.GenericConfig.POLLING_TIME_CONFIG(5)],
    fetchUrl: '[manager]/node-instances?_include=id&_sort=deployment_id&_size=1',

    render: function render(widget, data, error, toolbox) {
        if (_.isEmpty(data)) {
            return React.createElement(Stage.Basic.Loading, null);
        }

        var num = _.get(data, "metadata.pagination.total", 0);
        var KeyIndicator = Stage.Basic.KeyIndicator;

        return React.createElement(KeyIndicator, { title: "Servers", icon: "server", number: num });
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ3aWRnZXRzL3NlcnZlcnNOdW0vc3JjL3dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFJQSxNQUFNLFlBQU4sQ0FBbUI7QUFDZixRQUFJLFlBRFc7QUFFZixVQUFNLG1CQUZTO0FBR2YsaUJBQWEsbUJBSEU7QUFJZixrQkFBYyxDQUpDO0FBS2YsbUJBQWUsQ0FMQTtBQU1mLFdBQVEsS0FOTztBQU9mLGdCQUFZLEtBUEc7QUFRZixhQUFTLElBUk07QUFTZiwwQkFBc0IsQ0FDbEIsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixDQUF3QyxDQUF4QyxDQURrQixDQVRQO0FBWWYsY0FBVSxrRUFaSzs7QUFjZixZQUFRLGdCQUFTLE1BQVQsRUFBZ0IsSUFBaEIsRUFBcUIsS0FBckIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDeEMsWUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFWLENBQUosRUFBcUI7QUFDakIsbUJBQU8sb0JBQUMsS0FBRCxDQUFPLEtBQVAsQ0FBYSxPQUFiLE9BQVA7QUFDSDs7QUFFRCxZQUFJLE1BQU0sRUFBRSxHQUFGLENBQU0sSUFBTixFQUFZLDJCQUFaLEVBQXlDLENBQXpDLENBQVY7QUFDQSxZQUFJLGVBQWUsTUFBTSxLQUFOLENBQVksWUFBL0I7O0FBRUEsZUFDSSxvQkFBQyxZQUFELElBQWMsT0FBTSxTQUFwQixFQUE4QixNQUFLLFFBQW5DLEVBQTRDLFFBQVEsR0FBcEQsR0FESjtBQUdIO0FBekJjLENBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBwYXdlbHBvc2VsIG9uIDA0LzExLzIwMTYuXG4gKi9cblxuU3RhZ2UuZGVmaW5lV2lkZ2V0KHtcbiAgICBpZDogXCJzZXJ2ZXJzTnVtXCIsXG4gICAgbmFtZTogXCJOdW1iZXIgb2Ygc2VydmVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHNlcnZlcnMnLFxuICAgIGluaXRpYWxXaWR0aDogMixcbiAgICBpbml0aWFsSGVpZ2h0OiA4LFxuICAgIGNvbG9yIDogXCJyZWRcIixcbiAgICBzaG93SGVhZGVyOiBmYWxzZSxcbiAgICBpc1JlYWN0OiB0cnVlLFxuICAgIGluaXRpYWxDb25maWd1cmF0aW9uOiBbXG4gICAgICAgIFN0YWdlLkdlbmVyaWNDb25maWcuUE9MTElOR19USU1FX0NPTkZJRyg1KVxuICAgIF0sXG4gICAgZmV0Y2hVcmw6ICdbbWFuYWdlcl0vbm9kZS1pbnN0YW5jZXM/X2luY2x1ZGU9aWQmX3NvcnQ9ZGVwbG95bWVudF9pZCZfc2l6ZT0xJyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24od2lkZ2V0LGRhdGEsZXJyb3IsdG9vbGJveCkge1xuICAgICAgICBpZiAoXy5pc0VtcHR5KGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gPFN0YWdlLkJhc2ljLkxvYWRpbmcvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBudW0gPSBfLmdldChkYXRhLCBcIm1ldGFkYXRhLnBhZ2luYXRpb24udG90YWxcIiwgMCk7XG4gICAgICAgIGxldCBLZXlJbmRpY2F0b3IgPSBTdGFnZS5CYXNpYy5LZXlJbmRpY2F0b3I7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxLZXlJbmRpY2F0b3IgdGl0bGU9XCJTZXJ2ZXJzXCIgaWNvbj1cInNlcnZlclwiIG51bWJlcj17bnVtfS8+XG4gICAgICAgICk7XG4gICAgfVxufSk7Il19
