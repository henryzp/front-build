/**
  Template Module Generated by KissyPie 
 **/
KISSY.add(function(){
    return {"html":"<h4>处理文件列表:</h4>\n{{#if !files.length}}\n    <div>\n        没有文件\n    </div>\n{{#else}}\n    <ul class=\"plugin-file-list\">\n        {{#each files as file}}\n            <li>\n                <i class=\"icon-file\"></i> {{file}}\n            </li>\n        {{/each}}\n    </ul>\n{{/if}}\n"};
});
