# Resources
---

## cell01
### ex00 :
> learn the basic of hmtl tags (body, head, html)
- https://www.w3schools.com/TAgs/ref_byfunc.asp
- https://www.w3schools.com/tags/tag_doctype.ASP

## ex02 :
> learning how to use style on tags
- https://www.w3schools.com/Html//html_styles.asp

### ex03 :
> Using hyperlinks
- https://www.w3schools.com/tags/tag_a.asp

### ex04 :
> Creating and using colors for text and background
- https://www.w3schools.com/html/html_styles.asp

> To align objects side by side : 
I used div (division) cus it is used as a contianer for html elements & flex which is a css tool to put them side by side 
- https://www.w3schools.com/html/html_div.asp
- https://www.w3schools.com/cssref/css3_pr_flex.php
flex means to align a container's items into a straight line

> To create a horizontal line : use Horizontal rule
- https://www.w3schools.com/tags/tag_hr.asp

> to add in symbols 
- https://www.w3schools.com/html/html_symbols.asp
(i used &symbol_name)

> Adding a caption for images : im using figcaption
Does figure and figcaption it has to besed in the same time 
- https://www.w3schools.com/tags/tag_figcaption.asp

> Using div and organizing them by classes
- https://www.w3schools.com/html/html_classes.asp

> Aligning the items tp the centre: use div and style with css elements
```html
.parent-container {
  display: flex; /* another option is grid */
  justify-content: center; /* Centers items horizontally */
  align-items: center;     /* Centers items vertically */
   place-items: center; /* Centers items horizontally and vertically */
}
```
Note : 
- for display there is grid and flex : https://www.geeksforgeeks.org/css/comparison-between-css-grid-css-flexbox/
    - flex : for single columns and row
    - grid for rows and columns  

> div
stands for document division or just division

### ex05 :
> Creating tables 
- https://www.geeksforgeeks.org/html/html-table-borders/
- https://www.geeksforgeeks.org/html/html-table-borders/ 

> collapsing borders 
- called border collapse because it merges, or "collapses," the independent borders of adjacent table cells into a single shared border

> Coloring tables
- https://stackoverflow.com/questions/79665647/how-to-individually-color-html-table-cells


done with either using tables or <div>

## cell02
### ex00 : 
> Seperating css and html files 
- https://www.geeksforgeeks.org/css/how-to-use-css-to-separate-content-design/
- https://www.w3schools.com/hTML/html_css.asp
There are many ways to run css with html, and that is with using :
1. inline, by <tag style ="xxx;xx;></tag>
2. internal, by having <style> </style> , within the <head></head> of the file
3. external, by using a <link> element to tlink an external css file (this is what cell02 will mandate on) 

> creating a css reference / import an external stylesheet using <link rel>
- https://www.w3schools.com/tags/att_link_rel.asp
< link rel=""> where rel(relationship) specifiec the relationship between the current document and the linked document, the link listss out all the types of references but the one we're focusing is stylesheet
- https://www.w3schools.com/tags/att_a_href.asp
Just like in anchor <a>, use the href (hypertext reference) to link it to the exact locaiton of the file 


> Setting the content the entire view of the page
- https://www.w3schools.com/howto/howto_css_div_full_height.asp
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_div_full_height 

Based on explanations found online :
fo any html element to reach height 10%m the parent element must have a defined height. Div can easiliy be assigned to height 100 because 

> Using viewport to make the elements reponsive 
- https://www.w3schools.com/css/css_rwd_viewport.asp
- https://www.geeksforgeeks.org/css/how-to-set-viewport-height-width-in-css/
Viewport means the users's visible area of a webpage, 

## ex01 :
> Drop down manus using html and css
- https://www.w3schools.com/tags/tag_select.asp

"for" binds the label to a specific form element 
> label tags
- https://www.w3schools.com/tags/tag_label.asp
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label 

> purpose of name for forms (not that important, the samples i looked up inlcuded it thats why i searched up further details)
- https://www.w3schools.com/tags/att_select_name.asp

- https://www.reddit.com/r/learnprogramming/comments/4k4zpp/html_what_is_the_difference_between_name_and/

> customizing the selct menu
- https://www.geeksforgeeks.org/css/how-to-customize-a-select-html-form-element-with-css3/

> flexbox (i kept trying to move and justify contents within the label elements but it didnt work but if i turn them into flexboxes then it works)


> design stuff
    > shadow 
    - https://www.w3schools.com/CSSref/css3_pr_box-shadow.php
    > span is like div but for text /inline content only 
    - https://www.w3schools.com/tags/tag_span.asp

> dropdown 
- https://www.w3schools.com/CSSref/tryit.php?filename=trycss_sel_hover_dropdown

> drop down but wihtout using select
- https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_button

> colon : hover and so on
- for these the

> navibar (likely the thing i was supposed to do instead)
- https://www.youtube.com/watch?v=eKo1NV1qxbc

## ex02 :
> how to replicate parallax
- https://www.w3schools.com/HOWTO/howto_css_parallax.asp

## ex03 :
> how to create a user profile card
- https://www.w3schools.com/howto/howto_css_cards.asp
- https://www.w3schools.com/howto/howto_css_profile_card.asp

> merging columns in html
- https://www.w3schools.com/html/html_table_colspan_rowspan.asp

> maniputaing images
- https://www.w3schools.com/css/css3_object-fit.asp

> button
- https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml_button_css

> i tag in html
It just means itallic but its used for icons so that it is easility identifiable

## cell 03
### ex00
> Adding a javascript file
At head, do <script src="file"></script>

> creating scripts and events 
- https://www.youtube.com/watch?v=tLzMVZWapu8
- https://www.w3schools.com/html/html_scripts.asp
- https://stackoverflow.com/questions/21663003/change-background-color-with-button-in-html-page-how-to-use-more-than-1-color

> using id for elements
- https://stackoverflow.com/questions/12510399/do-i-really-need-to-call-getelementbyid