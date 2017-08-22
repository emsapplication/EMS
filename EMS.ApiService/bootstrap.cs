using EMS.BusinessLogicLayer.Operations;
using EMS.BusinessLogicLayer.ServiceContract;
using EMS.DataAccessLayer.Operations;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace EMS.ApiService
{
    public static class bootstrap
    {
        public static void InitializeTheObjects()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            // Register your types, for instance using the scoped lifestyle:
            container.Register<ILocationsBL, LocationsBL>(Lifestyle.Scoped);
            container.Register<IDesignationBL, DesignationBL>(Lifestyle.Scoped);
            container.Register<IStatusBL, StatusBL>(Lifestyle.Scoped);
            container.Register<IResourceDetailBL, ResourceDetailBL>(Lifestyle.Scoped);
            container.Register<IImportRecordBL, ImportRecordBL>(Lifestyle.Scoped);



            // This is an extension method from the integration package.
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
    }
}