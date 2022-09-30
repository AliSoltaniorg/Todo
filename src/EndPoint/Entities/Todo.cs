using EndPoint.Entities.Common;

namespace EndPoint.Entities
{
    public class Todo : AuditableEntity, IEntity
    {
        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public DateTime DueDate { get; set; }

        public DateTime ReminderDate { get; set; }

        public bool IsDone { get; set; }

        public bool IsStart { get; set; }

        public bool IsResume { get; set; }

        public bool IsStop { get; set; }

        public DateTime AmountTime { get; set; }

        public DateTime RemainingTime { get; set; }


    }
}
