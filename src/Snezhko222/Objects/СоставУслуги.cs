﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhko222
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав услуги.
    /// </summary>
    // *** Start programmer edit section *** (СоставУслуги CustomAttributes)

    // *** End programmer edit section *** (СоставУслуги CustomAttributes)
    [AutoAltered()]
    [Caption("Состав услуги")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставУслугиE", new string[] {
            "Количество as \'Количество\'",
            "Единицы as \'Единицы\'",
            "Детали as \'Детали\'",
            "Детали.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Детали.Наименование"})]
    [MasterViewDefineAttribute("СоставУслугиE", "Детали", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class СоставУслуги : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Snezhko222.Единицы fЕдиницы;
        
        private IIS.Snezhko222.Детали fДетали;
        
        private IIS.Snezhko222.Услуга fУслуга;
        
        // *** Start programmer edit section *** (СоставУслуги CustomMembers)

        // *** End programmer edit section *** (СоставУслуги CustomMembers)

        
        /// <summary>
        /// Единицы.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Единицы CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Единицы CustomAttributes)
        public virtual IIS.Snezhko222.Единицы Единицы
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get start)
                IIS.Snezhko222.Единицы result = this.fЕдиницы;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set start)
                this.fЕдиницы = value;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Количество CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Get start)

                // *** End programmer edit section *** (СоставУслуги.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (СоставУслуги.Количество Get end)

                // *** End programmer edit section *** (СоставУслуги.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Set start)

                // *** End programmer edit section *** (СоставУслуги.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (СоставУслуги.Количество Set end)

                // *** End programmer edit section *** (СоставУслуги.Количество Set end)
            }
        }
        
        /// <summary>
        /// Состав услуги.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Детали CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Детали CustomAttributes)
        [PropertyStorage(new string[] {
                "Детали"})]
        [NotNull()]
        public virtual IIS.Snezhko222.Детали Детали
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Детали Get start)

                // *** End programmer edit section *** (СоставУслуги.Детали Get start)
                IIS.Snezhko222.Детали result = this.fДетали;
                // *** Start programmer edit section *** (СоставУслуги.Детали Get end)

                // *** End programmer edit section *** (СоставУслуги.Детали Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Детали Set start)

                // *** End programmer edit section *** (СоставУслуги.Детали Set start)
                this.fДетали = value;
                // *** Start programmer edit section *** (СоставУслуги.Детали Set end)

                // *** End programmer edit section *** (СоставУслуги.Детали Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Snezhko222.Услуга.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Услуга CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Услуга CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Услуга"})]
        public virtual IIS.Snezhko222.Услуга Услуга
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get start)
                IIS.Snezhko222.Услуга result = this.fУслуга;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set start)
                this.fУслуга = value;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставУслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставУслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставУслугиE", typeof(IIS.Snezhko222.СоставУслуги));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставУслуги.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)
    public class DetailArrayOfСоставУслуги : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Snezhko222.DetailArrayOfСоставУслуги members)

        // *** End programmer edit section *** (IIS.Snezhko222.DetailArrayOfСоставУслуги members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставУслуги by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставУслуги.
        /// </summary>
        public DetailArrayOfСоставУслуги(IIS.Snezhko222.Услуга fУслуга) : 
                base(typeof(СоставУслуги), ((ICSSoft.STORMNET.DataObject)(fУслуга)))
        {
        }
        
        public IIS.Snezhko222.СоставУслуги this[int index]
        {
            get
            {
                return ((IIS.Snezhko222.СоставУслуги)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Snezhko222.СоставУслуги dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
