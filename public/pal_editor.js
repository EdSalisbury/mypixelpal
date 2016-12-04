function add_entry()
{
    var last_entry = document.getElementById('last_entry');
    var num = last_entry.value;
    last_entry.setAttribute('value', parseInt(num)+1);

    var key_cell = document.createElement('td');
    var text = document.createTextNode('#');
    var value_cell = document.createElement('td');
    var preview_cell = document.createElement('td');
    var delete_cell = document.createElement('td');

    var key_field = document.createElement('input');
    key_field_name = 'key_'+num;
    key_field.setAttribute('type', 'text'); 
    key_field.setAttribute('size', '20'); 
    key_field.setAttribute('id', key_field_name); 
    key_field.setAttribute('name', key_field_name); 

    var value_field = document.createElement('input');
    value_field_name = 'value_'+num;
    value_field.setAttribute('type', 'text'); 
    value_field.setAttribute('size', '10'); 
    value_field.setAttribute('id', value_field_name); 
    value_field.setAttribute('name', value_field_name); 
    value_field.onchange = function () {update_preview(num)};

    var delete_button = document.createElement('input');
    delete_button.setAttribute('type', 'button');
    delete_button.onclick = function () {delete_row(num)};
    delete_button.value = 'Delete';

    preview_field_name = 'preview_'+num;
    preview_cell.style.border='1px solid black';
    preview_cell.style.paddingLeft='10px';
    preview_cell.setAttribute('id', preview_field_name);

    key_cell.appendChild(key_field);
    value_cell.appendChild(text);
    value_cell.appendChild(value_field);
    delete_cell.appendChild(delete_button);

    var row = document.createElement('tr');
    row.id='row_'+num;
    row.appendChild(key_cell);
    row.appendChild(value_cell);
    row.appendChild(preview_cell);
    row.appendChild(delete_cell);

    var last_row = document.getElementById('last_row');
    var table = last_row.parentNode;
    table.insertBefore(row, last_row);
}

function delete_row(row_id)
{
    var row = document.getElementById('row_'+row_id);
    var table = row.parentNode;
    table.focus();
    table.removeChild(row);
}

function update_preview(row_id)
{
    var preview = document.getElementById('preview_'+row_id);
    var value = document.getElementById('value_'+row_id).value;
    preview.style.backgroundColor='#'+value;
}
