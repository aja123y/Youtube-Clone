export const API_KEY = 'AIzaSyDCE68J_jJJOVfo8wXG_aavsSwPqLK3CTA';

 export const Value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}