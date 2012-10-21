KISSY.add(function(){
    return {"html":"<div class=\"report-plugin-item\">\n    <div class=\"report-plugin-item-hd{{#if content}} report-plugin-hd-has-content{{/if}}\">\n        <h4>{{name}} \n        {{#if typeof report.count === 'number'}}\n        <span class='plugin-bdg'>\n            <span title='Execed' class=\"badge\">{{report.count}}</span>\n        </span>\n        {{/if}}\n        {{#if typeof report.warningCount === 'number' && report.warningCount > 0}}\n        <span class='plugin-bdg'>\n            <span title='Warning' class=\"badge badge-warning\">{{report.warningCount}}</span>\n        </span>\n        {{/if}}\n        {{#if typeof report.errorCount === 'number' && report.errorCount > 0}}\n        <span class='plugin-bdg'>\n            <span title='Error'  class=\"badge badge-important\">{{report.errorCount}}</span>\n        </span>\n        {{/if}}\n        </h4>\n    </div>\n    {{#if content}}\n    <div class='report-plugin-item-bd'>{{content}}</div>\n    {{/if}}\n    <div class=\"report-plugin-item-ft\">\n        <ul>\n            <li class='used-time'><i class='icon-time'></i> {{report.used_time}} ms\n            </li>\n        </ul>\n    </div>\n</div>"};
});