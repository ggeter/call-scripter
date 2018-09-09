// client-side js
// run by the browser each time your view template is loaded

console.log('Scripter Loading -- Copyright 2018+, Greg Geter, greg@geter.co, ggeter@gmail.com');






$(document).ready(function() {
    var $flowchart = $('#ScripterWorkpace');
    var $container = $flowchart.parent();
    
    var cx = $flowchart.width() / 2;
    var cy = $flowchart.height() / 2;
    
    var data = {
      operators: {
        operator1: {
          top: cy - 100,
          left: cx - 200,
          properties: {
            title: 'Operator 1',
            inputs: {},
            outputs: {
              output_1: {
                label: 'Output 1',
              }
            }
          }
        },
        operator2: {
          top: cy,
          left: cx + 140,
          properties: {
            title: 'Operator 2',
            inputs: {
              input_1: {
                label: 'Input 1',
              },
              input_2: {
                label: 'Input 2',
              },
            },
            outputs: {}
          }
        },
      },
      links: {
        link_1: {
          fromOperator: 'operator1',
          fromConnector: 'output_1',
          toOperator: 'operator2',
          toConnector: 'input_2',
        },
      }
    };
    

    // Apply the plugin on a standard, empty div...
    $flowchart.flowchart({
      data: data
    });

    $flowchart.parent().siblings('.delete_selected_button').click(function() {
      $flowchart.flowchart('deleteSelected');
    });
    
    
    
  });
