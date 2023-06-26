import React from 'react'

const Martdetails = () => {
  return (
    <div>
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <title>Mindanao: Star Rail | DataMart</title>
</head>
<body class="bg-primary-subtle">
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <div class="card mt-5">
                    <div class="card-header">
                        <h2 class="display-6 text-center" >Data Mart</h2>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered text-center">
                            <thead>
                            <tr class="bg-dark text-white">
                                <td> Train Number </td>
                                <td> Destination </td>
                                <td> Train Date </td>
                                <td> No. of Passengers </td>
                            </tr>
                            </thead>

                            <tbody>
                            <?php
                                $xml_data = simplexml_load_file("D:/Talend/studio/workspace/outRR.xml") or die("Error: Object Creation failure");
                                foreach($xml_data->children() as $data):
                            ?>
                            <tr>
                                <td><?php echo $data->train_number?></td>
                                <td><?php echo $data->destination?></td>
                                <td><?php echo $data->train_date?></td>
                                <td><?php echo $data->ticket_id?></td>
                            </tr>

                            <?php endforeach; ?>

                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    </div>
  )
}

export default Martdetails