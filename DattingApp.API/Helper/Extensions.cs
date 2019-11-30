using Microsoft.AspNetCore.Http;

namespace DattingApp.API.Helper
{
    public static class Extensions
    {
        public static void AddApplicationerror(this HttpResponse response, string message){
            response.Headers.Add("Apllication-Error" , message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}