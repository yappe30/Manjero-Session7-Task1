import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardDisplay({employeData}) {

  const employeList = employeData.length ? (
    employeData.map((emp) => {
      return (
        <React.Fragment key={emp.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {emp.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {emp.designation}
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
          <br></br>
        </React.Fragment>
      );
    })
  ) : (
    <>no available data</>
  );

  return <>{employeList}</>;
}