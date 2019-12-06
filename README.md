# open-borders
Allow warp travel for templates


```html
<open-borders target=... >
    <template>
        <my-element -my-prop></my-element>
    </template>
</open-borders>
```

does the following:

1.  Clones the template into the location specified by target string [TODO]
2.  Holds on to reference of cloned element [TODO]
3.  Dynamically attaches property myProp / attribute to open-borders tag, passes through to reference (my-element). [TODO]
4.  If addEventListener added to openBorders, actually attaches eventlistener to remote reference (my-element). [TODO]
